import React, { useState } from "react";
import classes from "./Dropdown.module.css";


interface Props {
    className?: string,
    data: string[],
    onSelecter: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown = (props: Props) => {
    const [type, setType] = useState<string>('Tất cả');
   
    return (
        <div>
            <div>
                <select className={classes.selectBox} value={type}
                    onChange={(e) => { 
                        props.onSelecter(e);
                        setType(e.target.value) 
                    }}
                >
                    {props.data.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Dropdown;

