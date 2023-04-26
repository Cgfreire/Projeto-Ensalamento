import { activeToggleMenu } from "./menu.js"
import { toggleModal } from './modal.js'
import { handleSubmitForm } from './handleSubmitForm.js'
import { fillGeneralTable, fillOthersTables } from './fillTables.js'

window.addEventListener('load', () => {
    activeToggleMenu()
    fillGeneralTable()
    fillOthersTables()
    toggleModal()
    handleSubmitForm()
})
