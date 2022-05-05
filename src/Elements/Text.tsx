import React from "react";
import { FC } from "react";
import './text.scss';

interface TextProps{
    className: string
    onClick: React.MouseEventHandler<HTMLParagraphElement>
    name: string
}

const Text: FC<TextProps> = ({ onClick, name }) => {
    return(
        <p 
            className="item_text"
            onClick={onClick}
        >
            {name}
        </p>
    )
}

export default Text