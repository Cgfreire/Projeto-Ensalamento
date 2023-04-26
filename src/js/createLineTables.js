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


    const removeIcon = newLine.querySelector('.fa-trash')
    removeIcon.addEventListener('click', () => {
        const list = JSON.parse(localStorage.getItem('general')) || []
        const id = parseInt(newLine.getAttribute('data-id'))
        const updatedList = list.filter(item => item.id !== id)
        localStorage.setItem('general', JSON.stringify(updatedList))
        newLine.remove()
    })


    tableID.appendChild(newLine)
}


export function createEntityList(tableID, entity, id) {

    const table = document.getElementById(`${tableID}`)

    const cell1 = document.createElement('td')
    cell1.innerText = id

    const cell2 = document.createElement('td')
    cell2.innerText = entity

    const newLine = document.createElement('tr')
    newLine.append(cell1, cell2)

    table.appendChild(newLine)
}