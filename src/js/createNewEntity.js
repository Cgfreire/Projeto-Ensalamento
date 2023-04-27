import { selects } from './handleSubmitForm.js'

function createInputNewEntity(panelID) {
    const panel = document.querySelector(`.${panelID}`)

    const inputContainerHTML = `
    <div class="input-new-entity-container" style="display: flex align-items: center">
      <input type="text" maxLength="30" minLength="2" placeholder="insert a new ${panelID}">
      <button>Criar</button>
    </div>
  `

    panel.innerHTML += inputContainerHTML

    const button = panel.querySelector('button')
    const select = document.querySelector(`select[data-table="${panelID}"]`)

    button.addEventListener('click', () => {
        const newEntity = panel.querySelector('input').value.trim()

        if (newEntity === '') return

        const savedOptions = Array.from(select.options).map((option) => option.value.trim().toLowerCase())

        if (savedOptions.includes(newEntity.toLowerCase())) {
            alert(`${newEntity.toUpperCase()} já existe nas opções!`)
            return
        }

        const option = document.createElement('option')
        option.value = newEntity
        option.textContent = newEntity
        select.appendChild(option)
        confirm(`Deseja adicionar ${option.textContent}?`)

        window.location.reload()

        const options = Array.from(select.options).map((option) => option.value)
        localStorage.setItem(panelID, JSON.stringify(options))
    })
}

export function createNewEntity() { 
    Array.from(selects).forEach(select => {
        createInputNewEntity(select.dataset.table)
        fillSelectOptions(select.dataset.table)
    })
}

export function fillSelectOptions(panelID) {
    let savedOptions = JSON.parse(localStorage.getItem(panelID))
    if (savedOptions) {
        const select = document.querySelector(`select[data-table="${panelID}"]`)
        select.innerHTML = ''
        savedOptions.forEach((optionText) => {
            const option = document.createElement('option')
            option.value = optionText
            option.textContent = optionText
            select.appendChild(option)
        })
    }
}
