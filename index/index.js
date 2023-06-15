document.addEventListener("DOMContentLoaded", function(event) {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].style.display = "none";
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = "flex";
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function previousSlide() {
      showSlide(currentSlide - 1);
    }
  
    document.querySelector(".prev").addEventListener("click", previousSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
  
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        previousSlide();
      }
    });
  
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);
  });
  