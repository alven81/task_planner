const getStorage = () => {
    if (localStorage.getItem('todoItemText')) {
        return JSON.parse(localStorage.getItem('todoItemText') || "");
    } else {
        return []
    }
}

export default getStorage
