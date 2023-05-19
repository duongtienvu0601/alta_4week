import React, { useState, useEffect } from "react";
import classes from './Table.module.css';
import ButtonUpdate from "../../Button/ButtonUpdate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from 'react-router-dom';
import { changeDevice } from "../../../store/reducers/deviceSlice";
import { addValue } from "../../../store/reducers/breadcrumbSlice";
import { PaginationControl } from 'react-bootstrap-pagination-control';
import ThietBi from "../ThietBi";
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
        statusConnect: 'Kết nối',
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
        statusConnect: 'Mất kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
    },
    {
        id: 'idThietBi8',
        name: 'Thiết bị 2',
        ipAddress: '192.168.1.2',
        statusAction: 'Hoạt động',
        statusConnect: 'Mất kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
    },
    {
        id: 'idThietBi7',
        name: 'Thiết bị 2',
        ipAddress: '192.168.1.2',
        statusAction: 'Ngưng hoạt động',
        statusConnect: 'Kết nối',
        service: 'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
    },
]

const Table: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const deviceStatus = useSelector((state: RootState) => state.devices.initialState)
    const dataFilter = useSelector((state: RootState) => state.devices.changeValueDevice)
    const statusFilter = useSelector((state: RootState) => state.devices.isFillter)
    const [page, setPage] = useState(1) 
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
                <ButtonUpdate className={classes.Button} onClick={() => navigate('/chitietthietbi')} text="Xem thêm" />
            </>
        )
    }
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(changeDevice(devices))
        console.log(deviceStatus)
    }, [])
    const Chitiet = () => {
        dispatch(addValue({
            title: "Chi tiết thiết bị",
            path: "/chitietthietbi",
        }));
        navigate('/chitietthietbi');
    };
    const CapNhat = () => {
        dispatch(addValue({
            title: "Cập nhật thiết bị",
            path: "/thietbi",
        }));
        navigate('/thietbi');
    };
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
                                    <ButtonUpdate onClick={Chitiet} text="Chi tiết" />
                                </td>
                                <td>
                                    <ButtonUpdate onClick={CapNhat} text="Cập nhật" />
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
                                    <ButtonUpdate onClick={Chitiet} text="Chi tiết" />
                                </td>
                                <td>
                                    <ButtonUpdate onClick={() => navigate('/chitietthietbi')} text="Cập nhật" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* <PaginationControl page={page}
                between={4}
                total={250}
                limit={20}
                changePage={(page) => {
                    setPage(page);
                    console.log(page)
                }}
                ellipsis={1} /> */}
        </div>
    );
}

export default Table;