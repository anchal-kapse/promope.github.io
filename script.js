document.addEventListener("DOMContentLoaded", function(){

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const ans = btn.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});

const faders = document.querySelectorAll(".fade-in");
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add("show");
  });
},{threshold:.2});
faders.forEach(f => obs.observe(f));

const track = document.querySelector(".testimonial-track");
let i = 0;
setInterval(() => {
  i = (i + 1) % 3;
  track.style.transform = `translateX(-${i * 100}%)`;
}, 4000);

});
