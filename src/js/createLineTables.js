export function createNewLineGeneralTable(tableID, obj) {
    const newLine = document.createElement('tr')
    newLine.setAttribute('data-id', obj.id)
    newLine.innerHTML = `
        <td>${obj.id}</td>
        <td><input  type="text" value="${obj.professor}" minlength="2" maxlength="20"></td>
        <td><input type="text" value="${obj.course}" minlength="2" maxlength="20"></td>
        <td><input type="text" value="${obj.room}" minlength="2" maxlength="20"></td>
        <td><input type="text" value="${obj.period}" minlength="2" maxlength="20"></td>
        <td><input type="text" value="${obj.challenge}" minlength="2" maxlength="20"></td>
        <td><input type="text" value="${obj.hour}" minlength="2" maxlength="20"></td>
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


    const cells = newLine.querySelectorAll('td input')
    cells.forEach(input => {
        input.addEventListener('blur', () => {
            const id = parseInt(newLine.getAttribute('data-id'))
            const list = JSON.parse(localStorage.getItem('general')) || []
            const index = list.findIndex(item => item.id === id)
            if (index !== -1) {
                list[index].professor = cells[0].value
                list[index].course = cells[1].value
                list[index].room = cells[2].value
                list[index].period = cells[3].value
                list[index].challenge = cells[4].value
                list[index].hour = cells[5].value
                localStorage.setItem('general', JSON.stringify(list))
            }
            
        })
    })



    tableID.appendChild(newLine)
}


export function createEntityList(tableID, entity) {

    const table = document.getElementById(`${tableID}`)

    const cell1 = document.createElement('td')
    cell1.innerText = entity.id
    
    const cell2 = document.createElement('td')
    cell2.innerText = entity.value

    const newLine = document.createElement('tr')
    newLine.append(cell1, cell2)

    table.appendChild(newLine)
}
