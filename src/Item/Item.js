import React, { useState } from "react";
import './item.scss'
import Button from '../Elements/Button';
import Label from '../Elements/Label';
import Text from '../Elements/Text';

// App -> Body -> Item

export function Item(props) {

    const [completeBtn] = useState('Complete'); //const [completeBtn, setCompleteBtn] = useState('Complete');
    const [deleteBtn] = useState('Delete'); //const [deleteBtn, setDelte] = useState('Delete');

    return(
        <section className="item">
            <div key={props.id} className="item_text">
                <Label 
                    name={props.date} 
                    classItem="item_label_date"
                />
                <Label 
                    name={props.name} 
                    classItem={props.classItem} 
                    onClick={(e) => props.editTodoLabel(props.index)}
                />
                <Text 
                    name={props.description}
                    onClick={(e) => props.editTodoText(props.index)}
                />
            </div>
            <div className="item_buttons">
                <Button 
                    onClick={(e) => props.changeStatus(props.index, props.status)}
                    name = {completeBtn}
                    className="button_item button_complete"
                />
                <Button 
                    onClick={(e) => props.deleteTodoRecord(props.index)} 
                    name = {deleteBtn}
                    className="button_item button_delete"
                />
            </div>
        </section>
    )
}