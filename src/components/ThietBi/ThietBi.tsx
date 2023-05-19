import { memo, useState, useEffect, useRef, useCallback } from "react";
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
import { changeDevice, changeStatusFillter, fillterDevice } from "../../store/reducers/deviceSlice";
import Header from "../../layouts/header";
import SearchBox from "../SearchBox/SearchBox";
import { ButtonAdd } from "../Button/ButtonAdd";
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
    const [fillter, setFillter] = useState({
        status: "Tất cả",
        type: "Tất cả"
    })
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

    const handeFilter = useCallback(() => {

        let result = [];

        if (fillter.status === "Tất cả" && fillter.type === "Tất cả") {
            // Hiển thị toàn bộ danh sách thiết bị
            result = deviceStatus;
        } else {
            if (fillter.status === "Tất cả") {
                // Lọc danh sách thiết bị theo trạng thái hành động được chọn
                result = deviceStatus.filter(item => item.statusAction === fillter.type);
            } else if (fillter.type === "Tất cả") {
                // Lọc danh sách thiết bị theo trạng thái kết nối được chọn
                result = deviceStatus.filter(item => item.statusConnect === fillter.status);
            } else {
                // Lọc danh sách thiết bị theo cả trạng thái kết nối và trạng thái hành động được chọn
                result = deviceStatus.filter(item => item.statusConnect === fillter.status && item.statusAction === fillter.type);
            }
        }

        dispatch(changeStatusFillter(true))
        dispatch(fillterDevice(result))
        if (fillter.status === "Tất cả" && fillter.type === "Tất cả") {
            // Hiển thị toàn bộ danh sách thiết bị
            dispatch(changeStatusFillter(false));
        }

        return result;
    }, [fillter, deviceStatus, dispatch])


    useEffect(() => {
        handeFilter();
    }, [handeFilter])


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
            </div>
            <div className={classes.FrameDropdown}>
                <SearchBox />
                <div
                    style={{ display: "flex", flexDirection: "row", gap: "20px", marginTop: "20px" }}
                >
                    <a className={classes.TrangThai}>Trạng thái hoạt động</a>
                    <Dropdown data={[
                        "Tất cả", "Hoạt động", "Ngưng hoạt động"
                    ]}
                        onSelecter={(e) => {
                            setFillter({ ...fillter, type: e.target.value })
                        }}
                    />
                    <a className={classes.TrangThai1}>Trạng thái kết nối</a>
                    <Dropdown data={[
                        "Tất cả", "Kết nối", "Mất kết nối"
                    ]}
                        onSelecter={(e) => {
                            setFillter({ ...fillter, status: e.target.value })
                        }}
                    />
                </div>
            </div>
            <div className={classes.FrameTable}>
                <Table />
            </div>
            <ButtonAdd
                text="Thêm thiết bị"
                onClick={themthietbi}
            />
            <a className={classes.h1}>Danh sách thiết bị</a>
            <Menubar />
            {showNotification && <Notification />}


        </div>
    )
})
export default ThietBi;

