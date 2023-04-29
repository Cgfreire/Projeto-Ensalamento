import { activeToggleMenu } from "./menu.js"
import { toggleModal } from './modal.js'
import { handleSubmitForm } from './handleSubmitForm.js'
import { fillGeneralTable, fillOthersTables } from './fillTables.js'
import { createNewEntity } from "./createNewEntity.js"
import { toggleContainerEvents } from './handleCalendar.js'
import { toggleTheme } from "./theme.js"
import { handleCalendar } from './handleCalendar.js'

window.addEventListener('load', () => {
    activeToggleMenu()
    fillGeneralTable()
    createNewEntity()
    fillOthersTables()
    toggleModal()
    handleSubmitForm()
    toggleContainerEvents()
    toggleTheme()
    handleCalendar(3, 2023)
})  
