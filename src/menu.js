const buttons = document.querySelectorAll(".btn");
const panels = document.querySelectorAll(".panel");
const menuMobileBtn = document.querySelector(".menu-mobile-btn");
const menuMobile = document.querySelector(".menu-mobile-container");

export function activeToggleMenu() {
  buttons.forEach((btn) =>
    btn.addEventListener("click", (event) => renderOnePanel(event.target))
  );
}

function renderOnePanel(btn) {
  removePanel();
  let dataset = document.querySelectorAll(`[data-js="${btn.dataset.js}"]`);
  dataset.forEach((dataset) => dataset.classList.add("active"));
}

function removePanel() {
  buttons.forEach((btn) => btn.classList.remove("active"));
  panels.forEach((panel) => panel.classList.remove("active"));
}

export function openAndCloseMenuMobile() {
  menuMobileBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("open");
    menuMobile.childNodes.forEach((button) =>
      button.addEventListener("click", () => {
        menuMobile.classList.remove("open");
      })
    );
  });
}
