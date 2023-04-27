///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navigationItemEl = document.querySelectorAll(".navigation-item");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("navigation-link"))
      headerEl.classList.toggle("nav-open");
    // navigationItemEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
const menu = document.querySelector(".btn-mobile-nav");
const dropdown = document.querySelectorAll(".dropdown");

menu.addEventListener("click", function () {
  menu.parentElement.classList.toggle("open");
  document.body.classList.toggle("nav-open");
});
dropdown.forEach(function (item) {
  item.addEventListener("click", function () {
    item.parentElement.classList.toggle("link-open");
  });
});

///////////////////////////////////////////////////////////
