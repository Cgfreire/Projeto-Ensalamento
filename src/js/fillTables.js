import { generalTable } from './handleSubmitForm.js'
import { createEntityList, createNewLineGeneralTable } from './createLineTables.js';
import { inputs } from "./handleSubmitForm.js";


export function fillGeneralTable() {
    const list = JSON.parse(localStorage.getItem('general')) || []
    list.forEach(obj => {
        createNewLineGeneralTable(generalTable, obj)
    })
}


export function fillOthersTables() {
    Array.from(inputs).forEach(input => {
        const list = JSON.parse(localStorage.getItem(`${input.dataset.table}`)) || []
        list.forEach(item => {
            createEntityList(input.dataset.table, item)
        })
    })
}