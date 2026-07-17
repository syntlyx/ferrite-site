document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(value);
      const old = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = old;
      }, 1200);
    } catch {
      button.textContent = "Select";
    }
  });
});
