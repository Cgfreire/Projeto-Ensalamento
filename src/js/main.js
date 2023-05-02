import { activeToggleMenu } from "./menu.js"
import { toggleModal } from './modal.js'
import { fillGeneralTable, fillOthersTables } from './fillTables.js'
import { createNewEntity } from "./createNewEntity.js"
import { toggleTheme } from "./theme.js"
import { handleSubmitForm } from "./handleSubmitForm.js"
import { fillCalendar } from './handleCalendar.js'

window.addEventListener('load', () => {
    activeToggleMenu()
    fillGeneralTable()
    createNewEntity()
    fillOthersTables()
    toggleModal()
    handleSubmitForm()
    toggleTheme()
    fillCalendar()
})  


document.addEventListener('DOMContentLoaded', () => {
    const currentMonth = document.querySelector('#current-month')
    const currentYear = document.querySelector('#current-year')
    const calendar = document.querySelector('#calendario')
    const nextButton = document.querySelector('.btn-ant')
    const prevButton = document.querySelector('.btn-prox')
    const monthsBR = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let currentDate = new Date()

    function handleCalendar() {
        let year = currentDate.getFullYear()
        let month = currentDate.getMonth()

        currentMonth.innerHTML = monthsBR[month]
        currentYear.innerHTML = year

        let firstDayOfWeek = new Date(year, month, 1).getDay() - 1
        let getLastDayThisMouth = new Date(year, month + 1, 0).getDate()

        for (let i = firstDayOfWeek, index = 0; i < (42 - firstDayOfWeek); i++, index++) {
            let data = new Date(year, month, i)
            let currentDate = new Date()
            let tdDay = calendar.getElementsByTagName('td')[index]

            const dayOfMonth = data.getDate()
            const dataMonth = data.getMonth() + 1
            const dataYear = data.getFullYear()

            const formatedDate = `${dataYear}-${dataMonth < 10 ? '0' : ''}${dataMonth}-${dayOfMonth < 10 ? '0' : ''}${dayOfMonth}`;

            tdDay.setAttribute("data-date", formatedDate);
            tdDay.classList.remove('mes-anterior')
            tdDay.classList.remove('proximo-mes')
            tdDay.innerHTML = data.getDate()

            if (data.getFullYear() == currentDate.getFullYear() && data.getMonth() == currentDate.getMonth() && data.getDate() == currentDate.getDate()) {
                tdDay.classList.add('dia-atual')
            }

            if (i < 1) {
                tdDay.classList.add('mes-anterior')
            }
            if (i > getLastDayThisMouth) {
                tdDay.classList.add('proximo-mes')
            }
        }
    }

    handleCalendar()

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1)
        handleCalendar()
    })

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1)
        handleCalendar()
    })
})
