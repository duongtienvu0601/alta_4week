import { memo, useState, useEffect, useRef } from "react";
import type { FC } from "react";
import classes from "./ThietBi.module.css";
import { Menubar } from "../MenuBar/Menubar";
import Notification from "../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from 'react-router-dom';
import { addValue, changeValue } from "../../store/reducers/breadcrumbSlice";
import Dropdown from "../Dropdowns/Dropdown";
import Table from "./Table/Table";
import ThemThietBi from "../ThietBi/ThemThietBi/ThemThietBi";
import TableRow from "../ThietBi/Table/TableRow";
import { changeDevice } from "../../store/reducers/deviceSlice";
import Header from "../../layouts/header";
interface ThietBiProps {
    className?: string;
}
type Device = {
    id: string;
    name: string;
    ipAddress: string;
    statusAction: string;
    statusConnect: string;
    service: string;
};

const ThietBi: FC<ThietBiProps> = memo(function ThietBi(props = {}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const state = useSelector((state: RootState) => state.breadcrumb.value);
    const deviceStatus = useSelector((state: RootState) => state.devices.initialState)

    const handleBellClick = () => {
        setShowNotification(!showNotification);
    };
    const devices: Device[] = [
        {
            id: 'idThietBi',
            name: 'Thiết bị 1',
            ipAddress: '192.168.1.1',
            statusAction: 'Hoạt động',
            statusConnect: 'Kết nối',
            service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            id: 'idThietBi',
            name: 'Thiết bị 2',
            ipAddress: '192.168.1.2',
            statusAction: 'Không Hoạt động',
            statusConnect: 'Không Kết nối',
            service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            id: 'idThietBi',
            name: 'Thiết bị 1',
            ipAddress: '192.168.1.1',
            statusAction: 'Hoạt động',
            statusConnect: 'Kết nối',
            service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',

        },
        {
            id: 'idThietBi',
            name: 'Thiết bị 2',
            ipAddress: '192.168.1.2',
            statusAction: 'Không Hoạt động',
            statusConnect: 'Không Kết nối',
            service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',

        },
        {
            id: 'idThietBi',
            name: 'Thiết bị 1',
            ipAddress: '192.168.1.1',
            statusAction: 'Hoạt động',
            statusConnect: 'Mất kết nối',
            service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',

        },
        {
            id: 'idThietBi',
            name: 'Thiết bị 2',
            ipAddress: '192.168.1.2',
            statusAction: 'Hoạt động',
            statusConnect: 'Mất Kết nối',
            service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
    ]
    // useEffect(() => {
    //    dispatch(changeDevice(devices))

    // }, [])

    const themthietbi = () => {
        dispatch(addValue({
            title: "Thêm thiết bị",
            path: "/themthietbi",
        }));
        navigate('/themthietbi');
    };
    return (
        <div className={classes.main}>
            <div className={classes.TopBar}>
                <Header handleBellClick={handleBellClick} />
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

                {/* <p className={classes.text}>Thiết bị <span>Danh sách thiết bị</span></p>
                <p className={classes.chartText}>Danh sách thiết bị</p> */}
            </div>
            <div className={classes.FrameDropdown}>
                <Dropdown />
                <Table />
            </div>
            <a className={classes.h1}>Danh sách thiết bị</a>
            <div className={classes.FrameMain}>
                <div className={classes.buttonAdd}>
                    <button onClick={themthietbi}> <span>Thêm thiết bị</span></button>
                </div>

            </div>
            <Menubar />
            {showNotification && <Notification />}
        </div>
    )
})
export default ThietBi;

