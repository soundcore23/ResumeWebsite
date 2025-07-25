document.querySelectorAll(".code-explanation-wrapper").forEach(wrapper => {
  let currentIndex = 0;
  const codeBlocks = wrapper.querySelectorAll(".code-block");
  const explanations = wrapper.querySelectorAll(".explanation");
  const prevBtn = wrapper.querySelector(".prevCodeBtn");
  const nextBtn = wrapper.querySelector(".nextCodeBtn");

  function update() {
    codeBlocks.forEach((b, i) => b.style.display = i === currentIndex ? "block" : "none");
    explanations.forEach((e, i) => e.style.display = i === currentIndex ? "block" : "none");
    // Reset scroll on switch
    codeBlocks.forEach(block => block.scrollTop = 0);
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + codeBlocks.length) % codeBlocks.length;
    update();
  });

  nextBtn.addEventListener("click", () => {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % codeBlocks.length;
    update();
  });

  update(); // show first panel on load
});
