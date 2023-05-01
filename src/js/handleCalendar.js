import { tds } from "./handleSubmitForm.js";

export function toggleModalCalendar() {
    [...tds].forEach(td => {
       console.log(td.dataset.date)
    })
}