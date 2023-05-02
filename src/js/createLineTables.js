import { fillSelectOptions } from './createNewEntity.js'
import { selects } from './handleSubmitForm.js'


export function createNewLineGeneralTable(tableID, obj) {
    const newLine = document.createElement('tr')
    newLine.setAttribute('data-id', obj.id)
    newLine.innerHTML = `
        <td>${obj.id}</td>
        <td>${obj.professor}</td>
        <td>${obj.course}</td>
        <td>${obj.room}</td>
        <td>${obj.period}</td>
        <td>${obj.challenge}</td>
        <td>${obj.date}</td>
        <td>${obj.initHour}</td>
        <td>>${obj.finishHour}</td>
        <td><i class="fa-solid fa-trash"></i></td>
    `

    const trashIcon = newLine.querySelector('.fa-trash')
    trashIcon.addEventListener('click', () => {
        const list = JSON.parse(localStorage.getItem('general')) || []
        const id = parseInt(newLine.getAttribute('data-id'))
        const updatedList = list.filter(item => item.id !== id)
        localStorage.setItem('general', JSON.stringify(updatedList))
        newLine.remove()
        fillSelectOptions(tableID)
    })
    
    tableID.appendChild(newLine)
}

export function createNewLineOtherTables(tableID, entity, id) {
    const table = document.getElementById(`${tableID}`)

    const newLine = document.createElement('tr')
    newLine.innerHTML = `
        <td>${id}</td>
        <td><input disabled type="text" maxlength="30" minlength="2" value="${entity}"></td>
        <td><i class="fa-solid fa-pen"></i></td>
        <td><i class="fa-solid fa-trash"></i></td>
    `

    table.appendChild(newLine)

    const input = newLine.querySelector('input')
    let oldValue = input.value
    const editIcon = newLine.querySelector('.fa-pen')
    editIcon.addEventListener('click', () => {
        input.disabled = false
        input.focus()
    })

    input.addEventListener('blur', () => {
        input.disabled = true
        const newValue = input.value
        const list = JSON.parse(localStorage.getItem(tableID))
        const index = list.indexOf(oldValue)
        list.splice(index, 1, newValue)
        localStorage.setItem(tableID, JSON.stringify(list))
        fillSelectOptions(tableID)
    })


        const trashIcon = newLine.querySelector('.fa-trash')

    trashIcon.addEventListener('click', () => {
        Array.from(selects).forEach(select => {
            let optionsList = []
            Array.from(select.options).forEach(option => {
                optionsList.push(option.value)
                localStorage.setItem(select.dataset.table, JSON.stringify(optionsList))
            })
        })
            const list = JSON.parse(localStorage.getItem(tableID)) || []
            const newList = list.filter(item => item !== entity)
            localStorage.setItem(tableID, JSON.stringify(newList))
            newLine.remove()
            fillSelectOptions(tableID)  
        })
}
