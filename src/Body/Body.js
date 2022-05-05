import React, { useState } from "react";
import './body.scss'
import { Item } from "../Item/Item";
// App -> Body
export default function Body(props) {

    const [classItemNotDone] = useState('item_label');
    const [classItemDone] = useState('item_label_done');
    return props.todoList.map((value, index) => 
        (
            <Item 
                editTodoLabel = {props.editTodoLabel}
                editTodoText = {props.editTodoText}
                classItem={value.status ? classItemDone : classItemNotDone}
                deleteTodoRecord={props.deleteTodoRecord}
                changeStatus={props.changeStatus}
                index={index}
                date={value.date}
                key={value.id}
                name={value.name}
                description={value.description}
                status={value.status}
            />
        )
    );
}

