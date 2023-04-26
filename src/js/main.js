import { activeToggleMenu } from "./menu.js"
import { toggleModal } from './modal.js'
import { handleSubmitForm } from './handleSubmitForm.js'
import { fillGeneralTable, fillOthersTables } from './fillTables.js'
import { createNewEntity } from "./createNewEntity.js"

window.addEventListener('load', () => {
    activeToggleMenu()
    fillGeneralTable()
    createNewEntity()
    fillOthersTables()
    toggleModal()
    handleSubmitForm()
})
