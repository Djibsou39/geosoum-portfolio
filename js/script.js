
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("animated-text");
    const text = textElement.textContent;
    textElement.textContent = ""; // Clear the text initially
    let index = 0;
    let isErasing = false;
  
    function typeWriter() {
      if (!isErasing && index < text.length) {
        // Typing effect
        textElement.textContent += text[index];
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed here
      } else if (index === text.length) {
        // Wait before erasing
        setTimeout(() => {
          isErasing = true;
          typeWriter();
        }, 1000); // Adjust delay before erasing
      } else if (isErasing && index > 0) {
        // Erasing effect
        textElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeWriter, 50); // Adjust erasing speed here
      } else if (isErasing && index === 0) {
        // Restart the typing effect
        isErasing = false;
        setTimeout(typeWriter, 10); // Adjust delay before restarting typing
      }
    }
    typeWriter();
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});