import { tds } from "./handleSubmitForm.js";
import { overlap } from "./modal.js";

export function handleCalendar(date, obj) {
    const eventDate = new Date(date)
    const dayOfMonth = eventDate.getDate() + 1
    const month = eventDate.getMonth() + 1
    const year = eventDate.getFullYear()

    const formatedDate = `${year}-${month < 10 ? '0' : ''}${month}-${dayOfMonth < 10 ? '0' : ''}${dayOfMonth}`
    const inverseFormatedDate = formatedDate.split('-').reverse().join('/')

    Array.from(tds).forEach(td => {
        if (td.dataset.date == formatedDate) {
            td.style.backgroundColor = '#00b37e'
            const modal = document.createElement('div')
            modal.className = 'modal-events'
            modal.innerHTML = `
                    <i class="fa-solid fa-rectangle-xmark"></i>
                        <h1>Data: ${inverseFormatedDate}</h1>
                        <div class="event">
                            <span><h2>Professor: ${obj.professor}</h2></span>
                            <span><h2>Curso: ${obj.course}</h2></span>
                            <span><h2>Sala: ${obj.room}</h2></span>
                            <span><h2>Período: ${obj.period}</h2></span>
                            <span><h2>Horário de início: ${obj.initHour}</h2></span>
                            <span><h2>Horário de término: ${obj.finishHour}</h2></span>
                            <span><h2>Desafio: ${obj.challenge}</h2></span>
                        </div>
                `

            document.body.appendChild(modal)

            td.addEventListener('click', () => {
                modal.classList.add('open')
                overlap.classList.add('active')
            })


            const buttonClose = modal.querySelector('.fa-rectangle-xmark')
            buttonClose.addEventListener('click', () => {
                modal.classList.remove('open')
                overlap.classList.remove('active')
            })
        }
    })
}


export function fillCalendar(){
  
}