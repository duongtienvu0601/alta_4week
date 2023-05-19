import React, { FC } from 'react'
import classes from './ButtonOutline.module.css';

interface ButtonOutlineType {
    onClick: () => void
    text:string
}

export const ButtonOutline: FC<ButtonOutlineType> = (props) => {
    return (
        <div
            className={classes.ButtonOutline}
            onClick={props.onClick}
        >
            <p className={classes.text} >{props.text}</p>
        </div>
    )
}
