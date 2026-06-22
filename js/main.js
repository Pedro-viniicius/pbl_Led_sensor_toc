(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const counter = document.querySelector("[data-slide-counter]");
  const nextButton = document.querySelector("[data-slide-next]");
  const prevButton = document.querySelector("[data-slide-prev]");
  const printButtons = document.querySelectorAll("[data-print]");

  let current = 0;

  function showSlide(index) {
    if (!slides.length) return;
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === current);
    });
    if (counter) {
      counter.textContent = `${current + 1} / ${slides.length}`;
    }
    const title = slides[current].dataset.title;
    if (title) {
      document.title = `${title} - Aula PBL`;
    }
  }

  if (slides.length) {
    showSlide(0);

    if (nextButton) {
      nextButton.addEventListener("click", () => showSlide(current + 1));
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => showSlide(current - 1));
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        showSlide(current + 1);
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        showSlide(current - 1);
      }
      if (event.key === "Home") {
        showSlide(0);
      }
      if (event.key === "End") {
        showSlide(slides.length - 1);
      }
    });
  }

  printButtons.forEach((button) => {
    button.addEventListener("click", () => window.print());
  });
})();
