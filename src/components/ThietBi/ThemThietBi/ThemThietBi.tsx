import { memo, useState, useEffect, useRef } from "react";
import Header from "../../../layouts/header";
import { Menubar } from "../../MenuBar/Menubar";
import type { FC } from "react";
import classes from "./ThemThietBi.module.css";
import Notification from "../../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from 'react-router-dom';
import { addValue, changeValue } from "../../../store/reducers/breadcrumbSlice";
interface ThemThietBiProps {
  className?: string;
}

const ThemThietBi: FC<ThemThietBiProps> = memo(function ThemThietBi(props = {}) {
  const { className } = props;
  const [showNotification, setShowNotification] = useState(false);
  const handleBellClick = () => {
    setShowNotification(!showNotification);
  };
  const state = useSelector((state: RootState) => state.breadcrumb.value);
  return (
    <div className={`${classes.main} ${className}`}>
      <Header className={classes.header} handleBellClick={handleBellClick} />
      <ul className={classes.breadcrumb}>
        {state.map((item) => {
          return (
            <li key={item.title} >
              {item.path ?
                <a href={item.path}>{item.title}</a> :
                <p>{item.title}</p>
              }
            </li>
          )
        })}
      </ul>
      <div className={classes.frameAdd}>
        <a className={classes.textA}>Quản lý thiết bị</a>
        
        <div className={classes.button}>
        <button className={classes.button1} onClick={() => console.log("Button clicked!")}>Hủy bỏ</button>
        <button className={classes.button2}>Thêm thiết bị</button>
        </div>
      </div>
      {showNotification && <Notification />}
      <Menubar />

    </div>
  )
})
export default ThemThietBi;


