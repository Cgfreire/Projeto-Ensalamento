import { selects } from './handleSubmitForm.js'

function createInputNewEntity(panelID) {
    const panel = document.querySelector(`.${panelID}`)
  
    const inputContainer = document.createElement('div')
    inputContainer.style.display = 'flex'
    inputContainer.style.alignItems = 'center'
    
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('maxLength', '30')
    input.setAttribute('minLength', '2')
    input.placeholder = `insert ${panelID}`
    
    const button = document.createElement('button')
    button.textContent = 'Criar'

    inputContainer.append(input, button)
    inputContainer.className = 'input-new-entity-container'
    
    panel.appendChild(inputContainer)


    button.addEventListener('click', () => {
        const select = document.querySelector(`select[data-table="${panelID}"]`)
        const newEntity = input.value.trim()

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
