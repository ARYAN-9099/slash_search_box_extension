function findInputsInNode(root) {
  const results = [];

  function traverse(node) {
    if (!node) return;

    if (
      node.nodeType === Node.ELEMENT_NODE &&
      (node.tagName === "INPUT" || node.tagName === "TEXTAREA") &&
      node.hasAttribute("placeholder")
    ) {
      results.push(node);
    }

    // Recurse into shadow root if it exists
    if (node.shadowRoot) {
      traverse(node.shadowRoot);
    }

    // Recurse into children
    node.childNodes.forEach(traverse);
  }

  traverse(root);
  return results;
}

function focusSearchInput() {
  console.log("Focusing search input...");

  const inputs = findInputsInNode(document);
  for (const input of inputs) {
    const placeholder = input.getAttribute("placeholder")?.toLowerCase();
    if (
      placeholder &&
      (placeholder.includes("search") ||
        placeholder.includes("find") ||
        placeholder.includes("ask"))
    ) {
      if (document.activeElement !== input) {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
        console.log("Focused input:", input);
      }
      return;
    }
  }

  console.warn("Search input not found.");
}

// Hotkey: press `/` to focus the search input unless you're typing
document.addEventListener("keydown", (event) => {
  const tag = document.activeElement.tagName.toLowerCase();
  if ((tag === "input" || tag === "textarea") && !document.activeElement.readOnly) return;

  if (event.key === "/" && !event.ctrlKey && !event.metaKey) {
    event.preventDefault();
    focusSearchInput();
  }
});
