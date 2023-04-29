const btnTheme = document.querySelector('.btn-theme')
const ball = document.querySelector('.ball')
const root = document.documentElement



export function toggleTheme() {
    btnTheme.addEventListener('change', (event) => {
        if (event.target.checked) {
            root.style.setProperty('--global-background', 'white')      
            root.style.setProperty('--disabled-color', 'white')
            root.style.setProperty('--light-txt', '#29292e')
            root.style.setProperty('--menu-active', 'whitesmoke')
            root.style.setProperty('--dark-txt', 'whitesmoke')
            root.style.setProperty('--ball', 'white')
            root.style.setProperty('--label-checkbox', 'whitesmoke')
            ball.style.transform = 'translateX(3rem)'
        }
        else {
            root.style.setProperty('--global-background', '#121214')
            root.style.setProperty('--disabled-color', '#18181b')
            root.style.setProperty('--light-txt', 'rgb(194, 194, 194)')
            root.style.setProperty('--menu-active', '#151518')
            root.style.setProperty('--dark-txt', '#29292e')
            root.style.setProperty('--ball', '#111114')
            root.style.setProperty('--label-checkbox', '#16161a')
            ball.style.transform = 'translateX(0)'
        }
    })
}