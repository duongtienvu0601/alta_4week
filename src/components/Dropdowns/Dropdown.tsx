import React, { ReactNode, useState, useEffect } from "react";
import classes from "./Dropdown.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeDevice, changeStatusFillter, device, fillterDevice } from "../../store/reducers/deviceSlice";


interface Props {
    className?: string;
}

const Dropdown: React.FC<Props> = () => {
    const [type, setType] = useState<'Tất cả' | 'Hoạt động' | 'Ngưng hoạt động'>('Tất cả');
    const [status, setStatus] = useState<'Tất cả' | 'Kết nối' | 'Mất kết nối'>('Tất cả');
    const dispatch = useDispatch();
    const deviceStatus = useSelector((state: RootState) => state.devices.initialState)
    const filteredDevices = useSelector((state: RootState): device[] => {
        return state.devices.initialState
    });
    useEffect(() => {
        console.log(filteredDevices)
    }, [])
    const handeFilter = () => {

        let result = [];
        if (status === "Tất cả" && type === "Tất cả") {
            // Hiển thị toàn bộ danh sách thiết bị
            result = deviceStatus;
        } else {
            if (status === "Tất cả") {
                // Lọc danh sách thiết bị theo trạng thái hành động được chọn
                result = deviceStatus.filter(item => item.statusAction === type);
            } else if (type === "Tất cả") {
                // Lọc danh sách thiết bị theo trạng thái kết nối được chọn
                result = deviceStatus.filter(item => item.statusConnect === status);
            } else {
                // Lọc danh sách thiết bị theo cả trạng thái kết nối và trạng thái hành động được chọn
                result = deviceStatus.filter(item => item.statusConnect === status && item.statusAction === type);
            }
        }

        dispatch(changeStatusFillter(true))
        dispatch(fillterDevice(result))
        if (status === "Tất cả" && type === "Tất cả") {
            // Hiển thị toàn bộ danh sách thiết bị
            dispatch(changeStatusFillter(false));
        }

        return result;
    }
    // const fillerStatus = () =>{
    //     const result = filteredDevices.filter(item => item.statusConnect === status);
    //     console.log(result)
    //     dispatch(fillterDevice(result))
    // }
    return (
        <div>
            <div>
                <select className={classes.selectBox} value={type} onChange={(e) => setType(e.target.value as 'Tất cả' | 'Hoạt động' | 'Ngưng hoạt động')}
                    onClick={handeFilter}
                >
                    <option value="Tất cả">Tất cả</option>
                    <option value="Hoạt động">Hoạt động</option>
                    <option value="Ngưng hoạt động">Ngưng hoạt động</option>
                </select>
            </div>
            <div>
                <select className={classes.selectBox1} value={status} onChange={(e) => setStatus(e.target.value as 'Tất cả' | 'Kết nối' | 'Mất kết nối')}
                    onClick={handeFilter}
                >
                    <option value="Tất cả">Tất cả</option>
                    <option value="Kết nối">Kết nối</option>
                    <option value="Mất kết nối">Mất kết nối</option>
                </select>
            </div>
            <div className={classes.table}>

            </div>
        </div>
    );
}

export default Dropdown;

