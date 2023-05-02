import { createNewLineGeneralTable } from "./createLineTables.js"
import { saveOnLocalStorage } from "./saveOnLocalStorage.js"
import { removeModal } from "./modal.js"
import { toggleInfoButton } from './modal.js'
import { handleCalendar } from "./handleCalendar.js"

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
        handleCalendar(date, objGeneral)
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
