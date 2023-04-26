export function saveOnLocalStorage(key, value) {
    const list = JSON.parse(localStorage.getItem(key)) || []
    list.push(value)
    localStorage.setItem(key, JSON.stringify(list))
}
