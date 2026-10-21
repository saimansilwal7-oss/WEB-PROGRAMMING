const API_URL = "https://official-joke-api.appspot.com/random_joke";

const setupElement = document.getElementById("setup");
const punchlineElement = document.getElementById("punchline");
const statusElement = document.getElementById("status");
const spinnerElement = document.getElementById("spinner");
const errorElement = document.getElementById("error-message");
const jokeButton = document.getElementById("joke-button");
const favouriteButton = document.getElementById("favourite-button");
const favouritesList = document.getElementById("favourites-list");
const emptyFavourites = document.getElementById("empty-favourites");
const favouriteCount = document.getElementById("favourite-count");

let currentJoke = null;
let favourites = loadFavourites();

function loadFavourites() {
  try {
    const saved = JSON.parse(localStorage.getItem("week61FavouriteJokes") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function setLoading(isLoading) {
  jokeButton.disabled = isLoading;
  spinnerElement.classList.toggle("hidden", !isLoading);
  statusElement.textContent = isLoading ? "Loading..." : "Here's your joke!";
  if (isLoading) {
    errorElement.classList.add("hidden");
    favouriteButton.disabled = true;
  }
}

async function loadJoke() {
  setLoading(true);
  setupElement.textContent = "Finding a joke...";
  punchlineElement.textContent = "";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("The joke service returned an error.");
    }
    const joke = await response.json();
    if (!joke || !joke.setup || !joke.punchline) {
      throw new Error("The joke response was incomplete.");
    }
    currentJoke = { id: joke.id ?? Date.now(), setup: joke.setup, punchline: joke.punchline };
    setupElement.textContent = currentJoke.setup;
    punchlineElement.textContent = currentJoke.punchline;
    favouriteButton.disabled = false;
    favouriteButton.textContent = isFavourite(currentJoke) ? "♥ Saved Favourite" : "♡ Save Favourite";
    statusElement.textContent = "Fresh from the joke API";
  } catch (error) {
    currentJoke = null;
    setupElement.textContent = "Oops! The joke escaped.";
    punchlineElement.textContent = "Please check your internet connection and try again.";
    statusElement.textContent = "We couldn't load a joke.";
    errorElement.textContent = "Sorry, something went wrong while fetching a joke. Please try again in a moment.";
    errorElement.classList.remove("hidden");
    favouriteButton.disabled = true;
  } finally {
    jokeButton.disabled = false;
    spinnerElement.classList.add("hidden");
  }
}

function isFavourite(joke) {
  return favourites.some(item => String(item.id) === String(joke.id));
}

function saveFavourites() {
  try {
    localStorage.setItem("week61FavouriteJokes", JSON.stringify(favourites));
    return true;
  } catch (error) {
    statusElement.textContent = "Browser storage is unavailable.";
    errorElement.textContent = "Your browser could not save favourites. Check its storage settings.";
    errorElement.classList.remove("hidden");
    return false;
  }
}

function toggleFavourite() {
  if (!currentJoke) return;
  if (isFavourite(currentJoke)) {
    favourites = favourites.filter(item => String(item.id) !== String(currentJoke.id));
    favouriteButton.textContent = "♡ Save Favourite";
  } else {
    favourites.unshift(currentJoke);
    favouriteButton.textContent = "♥ Saved Favourite";
  }
  if (saveFavourites()) renderFavourites();
}

function removeFavourite(id) {
  favourites = favourites.filter(item => String(item.id) !== String(id));
  saveFavourites();
  if (currentJoke && String(currentJoke.id) === String(id)) {
    favouriteButton.textContent = "♡ Save Favourite";
  }
  renderFavourites();
}

function renderFavourites() {
  favouritesList.replaceChildren();
  emptyFavourites.classList.toggle("hidden", favourites.length > 0);
  favouriteCount.textContent = `${favourites.length} saved`;

  favourites.forEach(joke => {
    const item = document.createElement("li");
    item.className = "favourite-item";
    const text = document.createElement("div");
    const setup = document.createElement("strong");
    setup.textContent = joke.setup;
    const punchline = document.createElement("p");
    punchline.textContent = joke.punchline;
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", "Remove favourite joke");
    removeButton.addEventListener("click", () => removeFavourite(joke.id));
    text.append(setup, punchline);
    item.append(text, removeButton);
    favouritesList.append(item);
  });
}

favouriteButton.addEventListener("click", toggleFavourite);
renderFavourites();
