import { modal, overlap, toggleInfoButton } from './modal.js'
import { fillSelectOptions } from './createNewEntity.js'

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
        <td><i class="fa-solid fa-pen"></i></td>
        <td><i class="fa-solid fa-trash"></i></td>
    `


    const editIcon = newLine.querySelector('.fa-pen')
    editIcon.addEventListener('click', (event) => {
        modal.classList.add("open")
        overlap.classList.toggle("active")
        toggleInfoButton()
    })

    const trashIcon = newLine.querySelector('.fa-trash')
    trashIcon.addEventListener('click', () => {
        const list = JSON.parse(localStorage.getItem('general')) || []
        const id = parseInt(newLine.getAttribute('data-id'))
        const updatedList = list.filter(item => item.id !== id)
        localStorage.setItem('general', JSON.stringify(updatedList))
        newLine.remove()
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
    const editIcon = newLine.querySelector('.fa-pen')
    editIcon.addEventListener('click', () => {
        input.disabled = false
        input.focus()
        
    })

    const oldValue = input.value

    input.addEventListener('blur', () => {
        input.disabled = true
        const newValue = input.value
        console.log(`novo valor: ${newValue}`)
        const list = JSON.parse(localStorage.getItem(tableID))
        const index = list.indexOf(oldValue)
        list.splice(index, 1, newValue)
        localStorage.setItem(tableID, JSON.stringify(list))
        fillSelectOptions(tableID)
    })


    const trashIcon = newLine.querySelector('.fa-trash')
    trashIcon.addEventListener('click', () => {
        const list = JSON.parse(localStorage.getItem(tableID)) || []
        const newList = list.filter(item => item !== entity)
        localStorage.setItem(tableID, JSON.stringify(newList))
        newLine.remove()
        window.location.reload()
    })
}
