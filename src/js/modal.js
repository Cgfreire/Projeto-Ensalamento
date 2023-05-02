export const modal = document.querySelector(".modal")
const btnModal = document.querySelector(".register-btn")
export const overlap = document.querySelector(".overlap")

export function toggleModal() {
  btnModal.addEventListener("click", () => {
    modal.classList.toggle("open")
    overlap.classList.toggle("active")
    toggleInfoButton()
  })
}



export function removeModal() {
  modal.classList.remove("open")
  overlap.classList.remove("active")
}



  export function toggleInfoButton() {
    const warningColor = "rgb(206, 74, 74)"
    const okColor = "rgb(0, 179, 126)"

    const colorButton = btnModal.style.backgroundColor == warningColor ? okColor : warningColor

    const textButton = btnModal.innerHTML == "Registrar" ? "Cancelar" : "Registrar"

    btnModal.style.backgroundColor = colorButton
    btnModal.innerHTML = textButton
  }