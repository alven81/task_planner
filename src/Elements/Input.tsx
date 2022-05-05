import React from "react";
import { FC } from "react";
import './input.scss';

interface InputProps {
    classLabel: string
    name: string
    description: string
    classInput: string
    value: string
    handleUpdateValue: (arg0: string) => void
}

const Input: FC<InputProps> = ({ classLabel, name, description, classInput, value, handleUpdateValue }) => {
    return (
        <div className="input_block">
            <label 
                className={classLabel} 
                htmlFor={name} 
            >
                {description}
            </label>
            <input 
                className={classInput} 
                type='text'
                name={name}
                value={value}
                onChange={(e) => {
                    e.preventDefault();
                    handleUpdateValue(e.target.value)}
                    }
            />
        </div>
    )
}

export default Input