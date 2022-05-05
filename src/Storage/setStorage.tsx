let setStorage = (updatedArr: any): void => {
    if (localStorage.getItem('todoItemText') || "") {
        let tempArr: any = [];
        tempArr = JSON.parse(localStorage.getItem('todoItemText') || "");
        tempArr.push(updatedArr);
        localStorage.setItem("todoItemText", JSON.stringify(tempArr) || "")
        const todoList: any = tempArr;
        return todoList;
     } else {
        localStorage.setItem("todoItemText", JSON.stringify([updatedArr]) || "");
        const todoList: any = updatedArr;
        return todoList;
     }
}

export default setStorage