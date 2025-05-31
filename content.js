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
      if (document.activeElement !== input) { // Prevent double focusing
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
  }
}

document.addEventListener("keydown", (event) => {
  // Ignore if user is typing in an input/textarea
  const tag = document.activeElement.tagName.toLowerCase();
  if (
    (tag === "input" || tag === "textarea") &&
    !document.activeElement.readOnly
  )
    return;

  if (event.key === "/" && !event.ctrlKey && !event.metaKey) {
    event.preventDefault();
    focusSearchInput();
  }
});
