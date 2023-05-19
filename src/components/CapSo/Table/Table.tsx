import React, { useState, useEffect } from "react";
import classes from './Table.module.css';
// import ButtonUpdate from "../Button/ButtonUpdate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
// import { useNavigate } from 'react-router-dom';
import { addValue } from "../../../store/reducers/breadcrumbSlice";
import { addCapSoValue, addChiTietCapSo, changeCapSoFillter } from "../../../store/reducers/capsoSlice";

import { CapsoType, Device } from "../../../types";

interface Props {
    className?: string,
    label: string[]
}

const devices: CapsoType[] = [
    {
        STT: '2001001',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tim mạch',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001002',
        TenKH: 'Huynh Ai Van',
        TenDV: 'Khám sản - Phụ khoa',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đã sử dụng',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001003',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám hô hấp',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001004',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tổng quát',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001005',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Kham tim mach   ',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đã sử dụng',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001006',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tổng quát',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Hệ thống"
    },
    {
        STT: '2001007',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tim mạch',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Bỏ qua',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001008',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tim mạch',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001009',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tai mũi họng',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Bỏ qua',
        NguonCap: "Hệ thống"
    },
]

const Table: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const capSoState = useSelector((state: RootState) => state.capSo.value)
    const dataFilter = useSelector((state: RootState) => state.capSo.dataFillter)
    const statusFilter = useSelector((state: RootState) => state.capSo.isFillter)


    const chiTiet = (data: CapsoType) => {
        dispatch(addChiTietCapSo(data))
        dispatch(addValue({title: "Chi tiết", path: '/chitiet'}))
    }


    useEffect(() => {
        dispatch(addCapSoValue(devices))
    }, [])
    return (
        <div className={classes.container}>
            <table
                className={classes.deviceList}
            >
                <thead>
                    <tr>
                        {props.label.map((item) => (
                            <th key={item}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {statusFilter === false ?
                        capSoState.map((device) => (
                            <tr key={device.STT} >
                                <td>{device.STT}</td>
                                <td>{device.TenKH}</td>
                                <td>{device.TenDV}</td>
                                <td>

                                    {device.ThoiGianCap}
                                </td>
                                <td>{device.HSD}</td>
                                <td>{device.TrangThai}</td>
                                <td>{device.NguonCap}</td>
                                <td
                                    onClick={() => chiTiet(device)}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Chi tiết
                                </td>
                            </tr>))
                        : dataFilter.map((device) => (
                            <tr key={device.STT} >
                                <td>{device.STT}</td>
                                <td>{device.TenKH}</td>
                                <td>{device.TenDV}</td>
                                <td>

                                    {device.ThoiGianCap}
                                </td>
                                <td>{device.HSD}</td>
                                <td>{device.TrangThai}</td>
                                <td>{device.NguonCap}</td>
                                <td
                                    onClick={() => chiTiet(device)}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Chi tiết
                                </td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;