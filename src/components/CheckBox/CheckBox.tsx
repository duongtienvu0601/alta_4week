import React, { useState } from 'react'
import classes from './checkbox.module.css';

type CheckBoxProps = {
    text: string,
    check: boolean
    onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const CheckBox: React.FC<CheckBoxProps> = (props) => {

    const [isCheck, setIsCheck] = useState<boolean>(props.check)

    return (
        <div className={classes.checkbox} >
            <input
                type="checkbox"
                value={props.text}
                onChange={(e) => { 
                    setIsCheck(!isCheck)
                    props.onCheck(e)
                }}
                checked={isCheck}
            />
            <p>{props.text}</p>
        </div>
    )
}
