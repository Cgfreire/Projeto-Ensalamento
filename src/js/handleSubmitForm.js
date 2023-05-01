import { createNewLineGeneralTable } from "./createLineTables.js"
import { saveOnLocalStorage } from "./saveOnLocalStorage.js"
import { removeModal } from "./modal.js"
import { toggleInfoButton } from './modal.js'

const form = document.querySelector('#form')
export const generalTable = document.querySelector('#general')
export const selectProfessor = document.querySelector('#select-professor')
export const selectCourse = document.querySelector('#select-course')
export const selectRoom = document.querySelector('#select-room')
export const inputChallenge = document.querySelector('#input-challenge')
export const selectPeriod = document.querySelector('#select-period')
export const inputDate = document.querySelector('#input-date')
export const inputInitHour = document.querySelector('#input-init-hour')
export const inputFinishHour = document.querySelector('#input-finish-hour')
export const selects = document.querySelectorAll('form select')
export const inputs = document.querySelectorAll('form input')
export const tds = document.querySelectorAll('#calendario tbody tr td')


export function handleSubmitForm() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const professor = selectProfessor.options[selectProfessor.selectedIndex].value
        const course = selectCourse.options[selectCourse.selectedIndex].value
        const room = selectRoom.options[selectRoom.selectedIndex].value
        const challenge = inputChallenge.value
        const period = selectPeriod.options[selectPeriod.selectedIndex].value
        const date = inputDate.value
        const initHour = inputInitHour.value
        const finishHour = inputFinishHour.value



        if (!verifyInputs()) return

        let objGeneral = {
            id: Date.now(),
            professor,
            course,
            room,
            challenge,
            period,
            date,
            initHour,
            finishHour
        }
        createNewLineGeneralTable(generalTable, objGeneral)
        saveOnLocalStorage('general', objGeneral)
        clearInputs()
        removeModal()
        toggleInfoButton()





        //Handle Date
        
        const eventDate = new Date(date)
        const dayOfWeek = eventDate.getDay() 
        const dayOfMonth = eventDate.getDate() + 1
        const month = eventDate.getMonth() + 1
        const year = eventDate.getFullYear()

        const formatedDate = `${year}-${month < 10 ? '0' : ''}${month}-${dayOfMonth < 10 ? '0' : ''}${dayOfMonth}`
        const inverseFormatedDate = formatedDate.split('-').reverse().join('/')

        console.log({ dayOfWeek, dayOfMonth, month, year, formatedDate })


        Array.from(tds).forEach(td => {
            console.log(td.dataset)
            if (td.dataset.date == formatedDate) {
                const modal = document.createElement('div')
                modal.className = 'modal-events'
                modal.innerHTML = `
                    <i class="fa-solid fa-rectangle-xmark"></i>
                        <h1>Data: ${inverseFormatedDate}</h1>
                        <div class="event">
                            <span><h2>Professor: ${professor}</h2></span>
                            <span><h2>Curso: ${course}</h2></span>
                            <span><h2>Sala: ${room}</h2></span>
                            <span><h2>Período: ${period}</h2></span>
                            <span><h2>Horário de início: ${initHour}</h2></span>
                            <span><h2>Horário de término: ${finishHour}</h2></span>
                            <span><h2>Desafio: ${challenge}</h2></span>
                        </div>
                `

                const notify = document.createElement('div')
                notify.className = 'notification-bubble'
               
                document.body.appendChild(modal, notify)

                td.addEventListener('click', () => {
                    modal.classList.add('open')
                })

                const buttonClose = modal.querySelector('.fa-rectangle-xmark')
                buttonClose.addEventListener('click', () => {
                    modal.classList.remove('open')
                })
            }
        })  
    })
}


function clearInputs() {
    inputs.forEach(input => input.value = '')
}

function verifyInputs() {
    let valid = true
    inputs.forEach(input => {
        if (input.value.trim().length === 0) {
            valid = false
        }
    })
    return valid
}
