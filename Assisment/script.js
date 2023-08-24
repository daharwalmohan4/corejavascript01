document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Simulate form submission
      // You can replace this with actual AJAX or other form submission handling
      setTimeout(() => {
        contactForm.classList.add("hidden");
        thankYouMessage.classList.remove("hidden");
      }, 1000);
    });
  });
  