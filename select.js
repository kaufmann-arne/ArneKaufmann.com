const ACTIVECLASS = 'selected';
const sections = document.querySelectorAll(".on");
const navLi = document.querySelectorAll(".list");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove(ACTIVECLASS);
    if (li.classList.contains(current)) {
      li.classList.add(ACTIVECLASS);
    }
  });
});

