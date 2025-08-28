// main.js

// Intersection Observer animation
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(
    ".content-partner, .content-spark, .content-mission, .content-who, .content-research, .content-mresearch"
  );

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(function (target) {
    observer.observe(target);
  });
});

// Highlight current menu link
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".menu a");

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Toggle menu for mobile
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
