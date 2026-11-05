"use strict";
// The assignment website previews HTML inside a sandbox. Storage can be blocked,
// so use safe helpers and keep the demo working even without persistence.
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* Session-only preview. */ } }
};
let transactions = [];
try {
  const saved = JSON.parse(storage.get("transactions") || "[]");
  transactions = Array.isArray(saved) ? saved : [];
} catch { transactions = []; }
let monthlyBudget = Number(storage.get("monthlyBudget") || 0);
if (!Number.isFinite(monthlyBudget) || monthlyBudget < 0) monthlyBudget = 0;
const form = document.getElementById("transaction-form");
const list = document.getElementById("transactions");
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-limit");
const incomeOutput = document.getElementById("income");
const expensesOutput = document.getElementById("expenses");
const balanceOutput = document.getElementById("balance");
const budgetTotalOutput = document.getElementById("budget-total");
const budgetSpentOutput = document.getElementById("budget-spent");
const progress = document.getElementById("budget-progress");
const budgetMessage = document.getElementById("budget-message");
const money = value => "₩" + value.toLocaleString();
function render() {
  let income = 0, expenses = 0;
  // Optimization 1: calculate both totals in one pass.
  for (const transaction of transactions) {
    const amount = Number(transaction.amount) || 0;
    if (transaction.type === "income") income += amount;
    else if (transaction.type === "expense") expenses += amount;
  }
  incomeOutput.textContent = money(income);
  expensesOutput.textContent = money(expenses);
  balanceOutput.textContent = money(income - expenses);
  budgetTotalOutput.textContent = money(monthlyBudget);
  budgetSpentOutput.textContent = money(expenses);
  const percent = monthlyBudget > 0 ? expenses / monthlyBudget * 100 : 0;
  progress.value = Math.min(percent, 100);
  progress.setAttribute("aria-valuetext", Math.round(percent) + "% of monthly budget used");
  budgetMessage.textContent = monthlyBudget === 0 ? "Set a budget to get started."
    : expenses > monthlyBudget ? "Budget exceeded! Try to reduce spending."
    : money(monthlyBudget - expenses) + " remaining.";
  // Optimization 2: build nodes off-DOM and insert the list once.
  const fragment = document.createDocumentFragment();
  transactions.forEach((transaction, index) => {
    const item = document.createElement("li");
    const label = document.createElement("span");
    const remove = document.createElement("button");
    label.textContent = `${transaction.description} (${transaction.category || "Other"}): ` +
      `${transaction.type === "income" ? "+" : "-"}${money(Number(transaction.amount) || 0)}`;
    remove.type = "button";
    remove.textContent = "Delete";
    remove.dataset.index = String(index);
    remove.setAttribute("aria-label", `Delete transaction: ${transaction.description}`);
    item.append(label, remove);
    fragment.appendChild(item);
  });
  list.replaceChildren(fragment);
}
 // Optimization 3: one delegated listener instead of one listener per row.
list.addEventListener("click", event => {
  const button = event.target.closest("button[data-index]");
  if (!button || !list.contains(button)) return;
  const index = Number(button.dataset.index);
  if (!Number.isInteger(index) || index < 0 || index >= transactions.length) return;
  transactions.splice(index, 1);
  save();
});
function save() { storage.set("transactions", JSON.stringify(transactions)); render(); }
budgetForm.addEventListener("submit", event => {
  event.preventDefault();
  const amount = Number(budgetInput.value);
  if (!Number.isFinite(amount) || amount <= 0) { alert("Please enter a budget greater than zero."); return; }
  monthlyBudget = amount;
  storage.set("monthlyBudget", String(monthlyBudget));
  render();
  budgetForm.reset();
});
form.addEventListener("submit", event => {
  event.preventDefault();
  const description = document.getElementById("description").value.trim();
  const amount = Number(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;
  if (!description || !Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a description and an amount greater than zero."); return;
  }
  transactions.push({ description, amount, type, category });
  save();
  form.reset();
});
render();
