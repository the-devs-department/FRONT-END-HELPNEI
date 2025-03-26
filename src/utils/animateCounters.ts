export function animateCounters() {
  const counters = document.querySelectorAll<HTMLElement>(".counter");

  counters.forEach((counter) => {
    let start = 0;
    const end = parseInt(counter.getAttribute("data-count") || "0", 10);
    const suffix = counter.getAttribute("data-suffix") || ""; // Obtém o sufixo (como %)
    const duration = 2000;
    const increment = end / (duration / 16);

    function updateCounter() {
      start += increment;
      if (start < end) {
        counter.textContent = `${Math.floor(start).toLocaleString()}${suffix}`;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = `${end.toLocaleString()}${suffix}`;
      }
    }
    updateCounter();
  });
}
