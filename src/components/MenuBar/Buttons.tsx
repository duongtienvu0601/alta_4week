import { memo, FC, useState } from "react";
import classes from "./Menubar.module.css";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

interface Props {
    className?: string,
    text: string,
    pathSvg: React.ReactNode,
    isClicked: boolean,
    onClick: () => void
}

export const Buttons: FC<Props> = memo(function Buttons(props) {
    // const [isClicked, setIsClicked] = useState<boolean>(false);
    // const handleClick = (page: string) => {
    //     let temp = [];

    //     if (page === "dashboard") {
    //         window.location.href = "/dashboard";
    //         setIsClicked(!isClicked);
    //         localStorage.setItem("dashboardClicked", isClicked ? "true" : "false");
    //     } else {
    //         console.log(`Clicked on ${page}`);
    //     }
    // };
    return (
        <div
            className={`${classes.DashboardItem} ${props.isClicked ? classes.DashboardItemClick : ''}`}
            // onClick={() => handleClick("dashboard")}
            onClick={props.onClick}

        >
            {/* <DashboardOutlinedIcon className={classes.IconBang} /> */}
            {props.pathSvg}
            <a className={classes.text}>{props.text}</a>
        </div>
    )
})

