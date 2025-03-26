export function animateCounters() {
    const counters = document.querySelectorAll(".counter");
  
    if (counters.length === 0) {
      console.warn("Nenhum contador encontrado.");
      return;
    }
  
    counters.forEach(counter => {
      let start = 0;
      const end = parseInt(counter.getAttribute("data-count") || "0", 10);
      const suffix = counter.getAttribute("data-suffix") || "";
      const duration = 2000;
      const increment = end / (duration / 50);
  
      const updateCounter = () => {
        start += increment;
        if (start >= end) {
          counter.textContent = end + suffix;
        } else {
          counter.textContent = Math.ceil(start) + suffix;
          requestAnimationFrame(updateCounter);
        }
      };
      updateCounter();
    });
  }
  