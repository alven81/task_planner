import React, {useState} from "react";
import './edit.scss';
import Text from '../Elements/Text';
import Input from '../Elements/Input';
import Button from "../Elements/Button";

export function Edit(props) {
    
    const [inputName] = useState('Change Todo'); //const [inputName, setInputName] = useState('Change Todo');
    const [buttonName] = useState('OK'); //const [buttonName, setButtonName] = useState('OK');

    function classForWindow(isItTrue) {
       return isItTrue ? "edit_container" : "edit_container hidden"
    }

    return (
        <div className = {classForWindow(props.editVisible)}>
            <Text 
                className="edit_text"
                name = {inputName}
                onClick={props.editTodoLabel} 
            />
            <Input 
                className="edit_text"
                value = {props.value}
                handleUpdateValue = {props.handleUpdateValue}
            />
            <Button 
                className="button"
                name = {buttonName}
                onClick={props.handleUpdateButton}
            />
        </div>
    )
}
