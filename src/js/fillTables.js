import { generalTable } from './handleSubmitForm.js'
import { createNewLineOtherTables, createNewLineGeneralTable } from './createLineTables.js';
import { selects } from "./handleSubmitForm.js";

export function fillGeneralTable() {
    const list = JSON.parse(localStorage.getItem('general')) || []
    list.forEach(obj => {
        createNewLineGeneralTable(generalTable, obj)
    })
}



export function fillOthersTables() {
    Array.from(selects).forEach(select => {
        Array.from(select.options).forEach(option => {
            const id = Array.from(select.options).indexOf(option) + 1
            createNewLineOtherTables(select.dataset.table, option.text, id)
        })
    })
}
