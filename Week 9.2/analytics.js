"use strict";
// Demonstration only: no tracking, cookies, or personal data are collected.
function showAnalyticsDemoStatus() {
  console.info("Async demonstration script loaded successfully.");
  const analyticsStatus = document.getElementById("analytics-status");
  if (analyticsStatus) {
    analyticsStatus.textContent =
      "The demonstration script loaded successfully (no tracking is performed).";
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showAnalyticsDemoStatus, { once: true });
} else {
  showAnalyticsDemoStatus();
}
