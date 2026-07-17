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

// Repeat the burn-strip sequence until one loop half covers any
// viewport width, so the marquee never runs out on wide screens.
// Speed is normalized to px/s instead of a fixed duration.
const burnTrack = document.querySelector(".burn-track");
if (burnTrack) {
  const base = burnTrack.innerHTML;
  const fillBurnTrack = () => {
    burnTrack.innerHTML = base;
    const copyWidth = burnTrack.scrollWidth;
    const perHalf = Math.max(
      1,
      Math.ceil((window.innerWidth * 1.25) / copyWidth),
    );
    burnTrack.innerHTML = Array(perHalf * 2)
      .fill(base)
      .join("");
    burnTrack.style.animationDuration = `${Math.round((copyWidth * perHalf) / 45)}s`;
  };
  fillBurnTrack();
  window.addEventListener("load", fillBurnTrack);
  let burnResizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(burnResizeTimer);
    burnResizeTimer = setTimeout(fillBurnTrack, 200);
  });
}

// Replay the terminal feed so the hero keeps feeling live
const terminalBody = document.querySelector(".terminal-body");
if (terminalBody && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    terminalBody.querySelectorAll(".tline").forEach((line) => {
      line.style.animation = "none";
      void line.offsetWidth;
      line.style.animation = "";
    });
  }, 9000);
}
