const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".register-btn");
const overlap = document.querySelector(".overlap");
const input = document.querySelector(`input[data-table="professor"]`);

export function toggleModal() {
  btnModal.addEventListener("mouseenter", () => {
    modal.classList.toggle("open");
    overlap.classList.toggle("active");
    toggleInfoButton();
    input.focus();
  });
}

export function removeModal() {
  modal.classList.remove("open");
  overlap.classList.remove("active");
}

export function toggleInfoButton() {
  const warningColor = "rgb(206, 74, 74)";
  const okColor = "rgb(0, 179, 126)";
  const colorButton =
    btnModal.style.backgroundColor == warningColor ? okColor : warningColor;

  const textButton =
    btnModal.innerHTML == "Registrar" ? "Cancelar" : "Registrar";

  btnModal.style.backgroundColor = colorButton;
  btnModal.innerHTML = textButton;
}
