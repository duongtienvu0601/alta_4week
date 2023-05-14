import React, { useState, useEffect } from "react";
import classes from './Table.module.css';
import ButtonUpdate from "../../Button/ButtonUpdate";
import TableRow from "../Table/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from 'react-router-dom';
import { changeDevice } from "../../../store/reducers/deviceSlice";
interface Props {
    className?: string;
}

interface Device {
    id: string;
    name: string;
    ipAddress: string;
    statusAction: string;
    statusConnect: string;
    service: string;
}

const devices: Device[] = [
    {
        id: 'idThietBi1',
        name: 'Thiết bị 1',
        ipAddress: '192.168.1.1',
        statusAction: 'Hoạt động',
        statusConnect: 'Kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
    },
    {
        id: 'idThietBi2',
        name: 'Thiết bị 2',
        ipAddress: '192.168.1.2',
        statusAction: 'Ngưng hoạt động',
        statusConnect: 'Mất kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
    },
    {
        id: 'idThietBi3',
        name: 'Thiết bị 1',
        ipAddress: '192.168.1.1',
        statusAction: 'Hoạt động',
        statusConnect: 'Kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',

    },
    {
        id: 'idThietBi4',
        name: 'Thiết bị 2',
        ipAddress: '192.168.1.2',
        statusAction: 'Ngưng hoạt động',
        statusConnect: 'Mất kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',

    },
    {
        id: 'idThietBi5',
        name: 'Thiết bị 1',
        ipAddress: '192.168.1.1',
        statusAction: 'Hoạt động',
        statusConnect: 'Mất kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',

    },
    {
        id: 'idThietBi6',
        name: 'Thiết bị 2',
        ipAddress: '192.168.1.2',
        statusAction: 'Hoạt động',
        statusConnect: 'Mất Kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
    },
    {
        id: 'idThietBi8',
        name: 'Thiết bị 2',
        ipAddress: '192.168.1.2',
        statusAction: 'Hoạt động',
        statusConnect: 'Mất Kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
    },
    {
        id: 'idThietBi7',
        name: 'Thiết bị 2',
        ipAddress: '192.168.1.2',
        statusAction: 'Ngưng hoạt động',
        statusConnect: 'Mất Kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
    },
]

const Table: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const deviceStatus = useSelector((state: RootState) => state.devices.initialState)
    const dataFilter = useSelector((state: RootState) => state.devices.changeValueDevice)
    const statusFilter = useSelector((state: RootState) => state.devices.isFillter)
    const dotClass = classes.dot;
    const statusActionClass = (status: string) => {
        return status === "Hoạt động" ? classes["dot-green"] : classes["dot-red"];
    }
    const statusConnectClass = (status: string) => {
        return status === "Kết nối" ? classes["dot-green"] : classes["dot-red"];
    }


    const serviceCellContent = (text: string) => {
        return (
            <>
                {text}
                {ButtonUpdate({ onClick: () => console.log("Xem thêm"), text: "Xem thêm" })}
            </>
        )
    }
    useEffect(() => {
        dispatch(changeDevice(devices))
        console.log(deviceStatus)
    }, [])
    return (
        <div className={classes.container}>
            <table
                className={classes["device-list"]}
            >
                <thead>
                    <tr>
                        <th>Mã thiết bị</th>
                        <th>Tên thiết bị</th>
                        <th>Địa chỉ IP</th>
                        <th>Trạng thái hoạt động</th>
                        <th>Trạng thái kết nối</th>
                        <th>Dịch vụ</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {statusFilter === false ?
                        deviceStatus.map((device) => (
                            <tr key={device.id} >
                                <td>{device.id}</td>
                                <td>{device.name}</td>
                                <td>{device.ipAddress}</td>
                                <td>
                                    <span className={`${dotClass} ${statusActionClass(device.statusAction)}`} />

                                    {device.statusAction}
                                </td>
                                <td>
                                    <span className={`${dotClass} ${statusConnectClass(device.statusConnect)}`} />
                                    {device.statusConnect}
                                </td>
                                <td>{serviceCellContent(device.service)}</td>
                                <td>
                                    {ButtonUpdate({ onClick: () => console.log("Chi tiết"), text: "Chi tiết" })}
                                </td>
                                <td>
                                    {ButtonUpdate({ onClick: () => console.log("Cập nhật"), text: "Cập nhật" })}
                                </td>
                            </tr>))
                    : dataFilter.map((device) => (
                                <tr key={device.id} >
                                    <td>{device.id}</td>
                                    <td>{device.name}</td>
                                    <td>{device.ipAddress}</td>
                                    <td>
                                        <span className={`${dotClass} ${statusActionClass(device.statusAction)}`} />

                                        {device.statusAction}
                                    </td>
                                    <td>
                                        <span className={`${dotClass} ${statusConnectClass(device.statusConnect)}`} />
                                        {device.statusConnect}
                                    </td>
                                    <td>{serviceCellContent(device.service)}</td>
                                    <td>
                                        {ButtonUpdate({ onClick: () => console.log("Chi tiết"), text: "Chi tiết" })}
                                    </td>
                                    <td>
                                        {ButtonUpdate({ onClick: () => console.log("Cập nhật"), text: "Cập nhật" })}
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;