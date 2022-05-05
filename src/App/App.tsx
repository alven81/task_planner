import React, { useEffect, useState } from 'react';
import './app.scss';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import setStorage from '../Storage/setStorage';
import getStorage from '../Storage/getStorage';
import Body from '../Body/Body';
import { Edit } from '../Edit/Edit';
import ITodo from '../types/todolist';

export default function App() {
    
    let [inputValueName, setInputValueName] = useState<string>('');
    let [inputValueDescription, setInputValueDescription] = useState<string>('');
    let [editInputName, setEditInputName] = useState<string>('');    
    const [nameBtn] = useState<string>('Add todo');
    const [inputName] = useState<string>("Name");
    const [inputDescription] = useState<string>("Description");
    let [inputType, setInputType] = useState<string>('');
    let [statusValue] = useState<boolean>(false);
    let [todoList, setTodoList] = useState<any>([]);
    let [indexRecordForChange, setIndexRecordForChange] = useState<number>(0);
    let [editVisibleForChange, setEditVisibleForChange] = useState<boolean>(false);


    //ставить сразу в пропс 3 фукции
    const handleUpdateInputValueName = (updatedValueName: string) => {
        setInputValueName(updatedValueName)
    }

    const handleUpdateInputValueDescription = (updatedValueDescription: string) => {
        setInputValueDescription(updatedValueDescription)
    }

    const handleUpdateChangeValue = (updatedChangeName: string) => {
        setEditInputName(updatedChangeName)
    }

    const handleUpdateChangeButton = () => {
        const name = editInputName;
        const index = indexRecordForChange;
        let todoList = getStorage();
       console.log(name, index);
        if (inputType === "name") {
            todoList[index].name = name
            } else {
                todoList[index].description = name
            }
        localStorage.setItem("todoItemText", JSON.stringify(todoList));
        setTodoList(todoList)
        let editVisibleForChange = false;
        setEditVisibleForChange(editVisibleForChange)
    }

    useEffect(() => {
        const todoList = getStorage();
        setTodoList(todoList)
    }, [])


    function deleteTodoRecord(index: number) {
        let todoList = getStorage();
        let tempArr = [];
        tempArr = todoList.filter((_value: any, id: number) => id !== index);
        setTodoList( tempArr );
        localStorage.setItem("todoItemText", JSON.stringify(tempArr));
    }

    const changeStatus = (index: number, value: any) => {
        let todoList = getStorage();
        console.log(todoList, index, value);
        todoList[index].status = !value;
        localStorage.setItem("todoItemText", JSON.stringify(todoList));
        setTodoList(todoList);
    }

    const addNewRecord = (id: number, date: string, name: string, description: string, status: boolean) => {
        if (name && description) {
            let updatedArr: any = {
                id,
                date,
                name,
                description,
                status,
            };
            setTodoList(setStorage(updatedArr));
            setInputValueName("");
            setInputValueDescription("");
        }
    }

    const idGenerator = () => {
        console.log(getStorage().length === 0);
        if (getStorage().length === 0) {
            return 0
        } else {
            return getStorage()[getStorage().length-1].id + 1
            }
    }

    const editTodoLabel = (e: any) => {
        let editInputName = "";
        let indexRecordForChange = e;
        const todoList = getStorage();
        editInputName = todoList[e].name;
        let inputType = 'name';
        let editVisibleForChange = true;
        setEditInputName(editInputName)
        setIndexRecordForChange(indexRecordForChange)
        setEditVisibleForChange(editVisibleForChange)
        setInputType(inputType)
    }

    const editTodoText = (e: any) => {
        let editInputName = "";
        let indexRecordForChange = e;
        const todoList = getStorage();
        editInputName = todoList[e].description;
        let inputType = 'description';
        let editVisibleForChange = true;
        setEditInputName(editInputName)
        setIndexRecordForChange(indexRecordForChange)
        setEditVisibleForChange(editVisibleForChange)
        setInputType(inputType)
    }

    return (
        <section className='container'>
            <div className='container_header'>
                <div>
                    <h1>Task Planner</h1>
                </div>
                <div className='header_main'>
                    <div className='header_input'>
                        <Input
                            value={inputValueName}
                            handleUpdateValue={handleUpdateInputValueName}
                            name={inputName}
                            description={inputName} 
                            classLabel="label" 
                            classInput="label_input"
                        />
                        <Input 
                            value={inputValueDescription}
                            handleUpdateValue={handleUpdateInputValueDescription}
                            name={inputDescription}
                            description={inputDescription} 
                            classLabel="label"
                            classInput="label_input"
                        />
                    </div>
                    <div className='header_button'>
                        <Button
                            name={nameBtn}
                            className="button"
                            onClick={() => {
                                const id = idGenerator();
                                const date = new Date().toLocaleDateString();
                                const name = inputValueName;
                                const description = inputValueDescription;
                                const status = statusValue;
                                addNewRecord(id, date, name, description, status);
                                inputValueName = "";
                                }
                            }
                        />
                    </div> 
                </div>
            </div>
            <div className='header'>
                <Body 
                    editTodoLabel={editTodoLabel}
                    editTodoText={editTodoText}
                    todoList={todoList}
                    deleteTodoRecord={deleteTodoRecord}
                    changeStatus={changeStatus}
                />
            </div>
                <Edit
                    editVisible = {editVisibleForChange}
                    indexRecord = {indexRecordForChange}
                    value = {editInputName}
                    handleUpdateValue={handleUpdateChangeValue}
                    handleUpdateButton={handleUpdateChangeButton}
                />
        </section>
    )
}
