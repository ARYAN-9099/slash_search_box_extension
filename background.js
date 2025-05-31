chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: focusSearchInput,
  });
});

function focusSearchInput() {
  console.log("Focusing search input...");
  const inputs = document.querySelectorAll(
    "input[placeholder], textarea[placeholder]"
  );
  for (const input of inputs) {
    const placeholder = input.getAttribute("placeholder")?.toLowerCase();
    if (
      placeholder &&
      (placeholder.includes("search") ||
        placeholder.includes("find") ||
        placeholder.includes("ask"))
    ) {
      input.focus();
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    }
  }
}
