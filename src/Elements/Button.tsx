import React from "react";
import { FC } from "react";
import './button.scss';

interface ButtonProps {
    className: string,
    name: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ className, onClick, name }) => {
    return (
        <button 
            className={className}
            onClick={onClick}
        >
            {name}
        </button>
    )
}

export default Button