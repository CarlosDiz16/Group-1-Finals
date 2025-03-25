document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });

  window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;  
    let maxScroll = 500;  
    let opacity = Math.max(1 - scrollPosition / maxScroll, 0);

    document.querySelector(".nav-banner").style.opacity = opacity;
});

let lastScrollTop = 0;
const elements = document.querySelector(".container");
const images = document.querySelector(".top-img"); 

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    elements.style.opacity = "1";
    elements.style.transform = "translateY(0)";
    images.style.opacity = "1";
    images.style.transform = "translateY(0)";
  } else {
    elements.style.opacity = "0.3"; 
    elements.style.transform = "translateY(10px)";
    images.style.transform = "translateY(10px)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

window.addEventListener("scroll", function () {
  let footer = document.querySelector("footer");
  let scrollPosition = window.innerHeight + window.scrollY;
  let documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight) {
      footer.style.opacity = "1";
  } else {
      footer.style.opacity = "0";
  }
});


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
      document.querySelector(".nav-banner").classList.add("show");
  }, 300);
});

//For Mission and Vision\

//loading in fading in of banner
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelectorAll(".nav-banner, .nav-bannerMV").forEach((banner) => {
      banner.classList.add("show");
    });
  }, 300);
});

window.addEventListener("scroll", function() {
  let scrollPosition = window.scrollY;  
  let maxScroll = 500;  
  let opacity = Math.max(1 - scrollPosition / maxScroll, 0);

  document.querySelectorAll(".nav-banner, .nav-bannerMV").forEach((banner) => {
    banner.style.opacity = opacity;
  });
});

//to let img-1 dissappear and appear on scroll
window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".img-1");
  const windowHeight = window.innerHeight;

  images.forEach((image) => {
    const rect = image.getBoundingClientRect();
    
    if (rect.top < windowHeight - 100) { 
      image.style.opacity = "1";
      image.style.transform = "translateY(0)";
    } else {
      image.style.opacity = "0";
      image.style.transform = "translateY(20px)";
    }
  });
});

//box-1 to fade in and out in scroll
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box-1");

  function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8;

      boxes.forEach((box) => {
          const boxTop = box.getBoundingClientRect().top;

          if (boxTop < triggerBottom) {
              box.classList.add("show");
          } else {
              box.classList.remove("show");
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); 
});

//button to go back up
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          backToTopButton.style.display = "block";
          backToTopButton.style.opacity = "1";
      } else {
          backToTopButton.style.opacity = "0";
          setTimeout(() => {
              backToTopButton.style.display = "none";
          }, 300);
      }
  });

  backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Thank you for your message!"); 

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
  });
});







