const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.classList.remove("active-btn");
      this.classList.add("active-btn");
    });
  }

  //section active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //remove section active classes and add to clicked one

      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransitions();
