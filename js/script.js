document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  function activateTab(tabName) {
    contents.forEach(content => {
      content.style.display = content.id === tabName ? "block" : "none";
    });

    tabs.forEach(tab => {
      if (tab.getAttribute("href").endsWith(`#${tabName}`)) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  // If a hash is present, activate that tab. Otherwise default to 'statement'
  const hash = window.location.hash ? window.location.hash.substring(1) : "statement";
  activateTab(hash);

  // Update tab on click
  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href").split("#")[1];
      history.pushState(null, "", `#${target}`);
      activateTab(target);
    });
  });
  // --- Shelter Project Code Panel Navigation ---
  const codeSlides = document.querySelectorAll('.code-slide');
  const explanations = document.querySelectorAll('.feature-explanations .explanation');
  const prevBtn = document.querySelector('.slider-nav-btn.prev');
  const nextBtn = document.querySelector('.slider-nav-btn.next');
  let currentSlide = 0;

  function showSlide(idx) {
    codeSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    explanations.forEach((exp, i) => {
      exp.classList.toggle('active', i === idx);
    });
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx === codeSlides.length - 1;
  }

  if (codeSlides.length && prevBtn && nextBtn) {
    showSlide(currentSlide);
    prevBtn.addEventListener('click', function() {
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
      }
    });
    nextBtn.addEventListener('click', function() {
      if (currentSlide < codeSlides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
      }
    });
  }
});
