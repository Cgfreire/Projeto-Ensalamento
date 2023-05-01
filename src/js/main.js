import { activeToggleMenu } from "./menu.js"
import { toggleModal } from './modal.js'
import { fillGeneralTable, fillOthersTables } from './fillTables.js'
import { createNewEntity } from "./createNewEntity.js"
import { toggleTheme } from "./theme.js"
import { handleSubmitForm } from "./handleSubmitForm.js"
import { toggleModalCalendar } from './handleCalendar.js'

window.addEventListener('load', () => {
    activeToggleMenu()
    fillGeneralTable()
    createNewEntity()
    fillOthersTables()
    toggleModal()
    handleSubmitForm()
    toggleTheme()
    toggleModalCalendar()
})  


document.addEventListener('DOMContentLoaded', () => {
    const currentMonth = document.querySelector('#current-month')
    const currentYear = document.querySelector('#current-year')
    const calendar = document.querySelector('#calendario')
    const monthsBR = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const btnAnt = document.querySelector('.btn-ant')
    const btnProx = document.querySelector('.btn-prox')



    function handleCalendar(month, year) {
        currentMonth.innerHTML = monthsBR[month]
        currentYear.innerHTML = year

        let firstDayOfWeek = new Date(year, month, 1).getDay() - 1
        let getLastDayThisMouth = new Date(year, month + 1, 0).getDate()

        for (let i = firstDayOfWeek, index = 0; i < (42 - firstDayOfWeek); i++, index++) {
            let data = new Date(year, month, i)
            let currentDate = new Date()
            let dayTable = calendar.getElementsByTagName('td')[index]

            const dayOfMonth = data.getDate()
            const dataMonth = data.getMonth() + 1
            const dataYear = data.getFullYear()

            const formatedDate = `${dataYear}-${dataMonth < 10 ? '0' : ''}${dataMonth}-${dayOfMonth < 10 ? '0' : ''}${dayOfMonth}`;

            dayTable.setAttribute("data-date", formatedDate);
            dayTable.classList.remove('mes-anterior')
            dayTable.classList.remove('proximo-mes')
            dayTable.innerHTML = data.getDate()

            if (data.getFullYear() == currentDate.getFullYear() && data.getMonth() == currentDate.getMonth() && data.getDate() == currentDate.getDate()) {
                dayTable.classList.add('dia-atual')
            }

            if (i < 1) {
                dayTable.classList.add('mes-anterior')
            }
            if (i > getLastDayThisMouth) {
                dayTable.classList.add('proximo-mes')
            }
        }
    }

    let currentDate = new Date()
    let mes = currentDate.getMonth()
    let ano = currentDate.getFullYear()
    handleCalendar(mes, ano)


    btnProx.addEventListener('click', () => {
        mes++
        if (mes > 11) {
            mes = 0
            ano++
        }
        handleCalendar(mes, ano)
    })


    btnAnt.addEventListener('click', () => {
        mes--
        if (mes < 0) {
            mes = 11
            ano--
        }
        handleCalendar(mes, ano)
    })
})