import { memo, useState, useEffect, useRef } from "react";
import Header from "../../layouts/header";
import { Menubar } from "../MenuBar/Menubar";
import type { FC } from "react";
import classes from "./DichVu.module.css";
import Notification from "../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from 'react-router-dom';
import { addValue, changeValue } from "../../store/reducers/breadcrumbSlice";
import { ButtonFull } from "../Button/ButtonFull";
import { ButtonOutline } from "../Button/ButtonOutline";
interface DichVuProps {
  className?: string;
}

const DichVu: FC<DichVuProps> = memo(function DichVu(props = {}) {
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
      <div style={{ marginLeft: '260px' }}>
        <ButtonFull onClick={() => console.log("hello")} text="Thêm dịch vụ" />
        <ButtonOutline onClick={() => console.log("hello")} text="Hủy bỏ"/>
      </div>
      <h1 style={{ marginLeft: '200px' }}> Đây là from Dịch Vụ</h1>
      {showNotification && <Notification />}
      <Menubar />

    </div>
  )
})
export default DichVu;


