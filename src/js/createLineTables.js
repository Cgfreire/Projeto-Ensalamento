

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

    const cell1 = document.createElement('td')
    cell1.innerText = id

    const cell2 = document.createElement('td')
    cell2.innerText = entity

    const cell3 = document.createElement('td')
    const editIcon = document.createElement('i')
    editIcon.className = 'fa-solid fa-pen'
    cell3.append(editIcon)

    const cell4 = document.createElement('td')
    const trashIcon = document.createElement('i')
    trashIcon.className = 'fa-solid fa-trash'
    cell4.append(trashIcon)

    const newLine = document.createElement('tr')
    newLine.append(cell1, cell2, cell3, cell4)

    table.appendChild(newLine)


    editIcon.addEventListener('click', () => {

    })


    trashIcon.addEventListener('click', () => {
        const list = JSON.parse(localStorage.getItem(tableID)) || []
        const newList = list.filter(item => item !== entity)
        localStorage.setItem(tableID, JSON.stringify(newList))
        newLine.remove()
        window.location.reload()
    })
}