import { memo, useState, useEffect, useRef } from "react";
import Header from "../../../layouts/header";
import { Menubar } from "../../MenuBar/Menubar";
import type { FC } from "react";
import classes from "./ChiTietThietBi.module.css";
import Notification from "../../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from 'react-router-dom';
import { addValue, changeValue } from "../../../store/reducers/breadcrumbSlice";
interface ThemThietBiProps {
    className?: string;
}

const ChiTietThietBi: FC<ThemThietBiProps> = memo(function ChiTietThietBi(props = {}) {
    const { className } = props;
    const [showNotification, setShowNotification] = useState(false);
    const [choose, setchoose] = useState("value");
    const handlechooseChange = (e: any) => {
        setchoose(e.target.value);
    };
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
            {/* <ButtonComponent className={classes.button} onClick={handleBellClick} text="Cập nhật thiết bị" /> */}
            <a className={classes.h1}>Quản lý thiết bị</a>
            <div className={classes.FrameChiTiet}>
                <a>Thông tin thiết bị</a>
                <div className={classes.DetailEquiR}>
                    <div>
                        <span className={classes.Text}>Mã thiết bị:</span>
                        <span className={classes.DetailText}>KIO_01</span>
                    </div>

                    <div>
                        <span className={classes.Text}>Tên thiết bị:</span>
                        <span className={classes.DetailText}>Kiosk</span>
                    </div>

                    <div>
                        <span className={classes.Text}>Địa chỉ IP:</span>
                        <span className={classes.DetailText}>128.172.308</span>
                    </div>
                </div>
                <div className={classes.DetailEquiL}>
                    <div>
                        <span className={classes.Text}>Loại thiết bị:</span>
                        <span className={classes.DetailText}>Kiosk</span>
                    </div>

                    <div>
                        <span className={classes.Text}>Tên đăng nhập:</span>
                        <span className={classes.DetailText}>Linhkyo011</span>
                    </div>

                    <div>
                        <span className={classes.Text}>Mật khẩu:</span>
                        <span className={classes.DetailText}>CMS</span>
                    </div>
                </div>

                <div className={classes.DetailS}>
                    <span className={classes.Text}>Dịch vị sử dụng:</span>
                    <span className={classes.DetailTexts}> Khám tim mạch, Khám sản - Phụ khoa,Khám răng hàm mặt, Khám tai mũi họng, khám hô hấp, Khám tổng quát.</span>
                </div>
            </div>
            {showNotification && <Notification />}
            <Menubar />

        </div >
    )
})
export default ChiTietThietBi;


