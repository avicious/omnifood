const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const currYear = document.querySelector("#year");
const navLinks = document.querySelectorAll(".main-nav-link");
const heroSection = document.querySelector(".section-hero");

currYear.textContent = new Date().getFullYear();

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  document.body.classList.toggle("fixed-position");
});

for (let navLink of navLinks) {
  navLink.addEventListener("click", function () {
    header.classList.toggle("nav-open");
    document.body.classList.toggle("fixed-position");
  });
}

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      header.classList.add("sticky");
      heroSection.style.marginTop = "8rem";
    } else {
      header.classList.remove("sticky");
      heroSection.style.marginTop = "0";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSection);
