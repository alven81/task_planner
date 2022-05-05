import React from "react";
import { FC } from "react";
import './label.scss';

interface LabelProps {
    classItem: string
    onClick: (React.MouseEventHandler<HTMLParagraphElement> | undefined)
    name: string
}

// App -> Body -> Item -> Label
const Label: FC<LabelProps> = ({ classItem, onClick, name }) => {
    return(
        <p 
            className={classItem}
            onClick={onClick}
        >
            {name}
        </p>
    )
}

export default Label