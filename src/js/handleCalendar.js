import { overlap } from './modal.js'

const tds = document.querySelectorAll('#calendario tbody tr td')
const containerEvents = document.querySelector('.container-events')
const buttonClose = containerEvents.querySelector('i')
const currentMonth = document.querySelector('#current-month')
const currentYear = document.querySelector('#current-year')
const calendar = document.querySelector('#calendario')
const monthsBR = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro']



export function toggleContainerEvents() {
    Array.from(tds).forEach(td => {
        td.addEventListener('click', () => {
            containerEvents.classList.add('open')
            overlap.classList.add('active')
        })
    })

    buttonClose.addEventListener('click', () => {
        containerEvents.classList.remove('open')
        overlap.classList.remove('active')
    })
}
   


export function handleCalendar(month, year) {
    currentMonth.innerHTML = monthsBR[month]
    currentYear.innerHTML = year

    let firstDayOfWeek = new Date(year, month, 1).getDay() - 1
    let getLastDayThisMouth = new Date(year, month + 1, 0).getDate()

    for (let i = -firstDayOfWeek, index = 0; i < (42 - firstDayOfWeek); i++, index++) {
        let dt = new Date(year, month, i)
        let dtNow = new Date()
        let dayTable = calendar.getElementsByTagName('td')[index]
        dayTable.classList.remove('mes-anterior')
        dayTable.classList.remove('proximo-mes')
        dayTable.innerHTML = dt.getDate()

        if (dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()) {
            dayTable.classList.add('dia-atual')
        }

        if (i < 1) {
            dayTable.classList.add('mes-anterior')
        }
        if (i > getLastDayThisMouth) {
            dayTable.classList.add('proximo-mes')
        }
    }   

    let now = new Date()
    let mes = now.getMonth()
    let ano = now.getFullYear()

    const btnAnt = document.querySelector('.btn-ant')
    const btnProx = document.querySelector('.btn-prox')
    

    btnProx.addEventListener('click', () => {
        mes++
        handleCalendar(mes, ano)
    })

    btnAnt.addEventListener('click', () => {
        mes--
        handleCalendar(mes, ano)
    })
}