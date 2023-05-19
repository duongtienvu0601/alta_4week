import React, { FC } from 'react'
import classes from './ButtonFull.module.css';

interface ButtonFullType {
    onClick: () => void,
    text:string,

}

export const ButtonFull: FC<ButtonFullType> = (props) => {
    return (
        <div
            className={classes.ButtonFull}
            onClick={props.onClick}
        >
            <p className={classes.text} >{props.text}</p>
        </div>
    )
}
