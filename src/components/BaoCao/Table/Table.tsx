import React, { useState, useEffect } from "react";
import classes from './Table.module.css';
// import ButtonUpdate from "../Button/ButtonUpdate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
// import { useNavigate } from 'react-router-dom';
import { addValue } from "../../../store/reducers/breadcrumbSlice";
import { addCapSoValue, addChiTietCapSo, changeCapSoFillter } from "../../../store/reducers/capsoSlice";

import { BaoCaoType} from "../../../types";

interface Props {   
    className?: string,
    label: string[]
}

const data: BaoCaoType[] = [
    {
        STT: '2010001',
        TenDV: "Khám tim mạch",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Đang chờ",
        NguonCap: "Kiosk"
    },
    {
        STT: '2010002',
        TenDV: "Răng hàm mặt",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Đã sử dụng",
        NguonCap: "Hệ thống"
    },
    {
        STT: '2010003',
        TenDV: "Khám sản - phụ khoa",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Bỏ qua",
        NguonCap: "Kiosk"
    },
    {
        STT: '2010004',
        TenDV: "Răng hàm mặt",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Đang chờ",
        NguonCap: "Hệ thống"
    },
    {
        STT: '2010005',
        TenDV: "Tai mũi họng",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Đang chờ",
        NguonCap: "Kiosk"
    },
    {
        STT: '2010006',
        TenDV: "Khám tổng quát",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Bỏ qua",
        NguonCap: "Hệ thống"
    },
    {
        STT: '2010007',
        TenDV: "Khám hô hấp",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Đang chờ",
        NguonCap: "Kiosk"
    },
    {
        STT: '2010008',
        TenDV: "Khám hô hấp",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Đã sử dụng",
        NguonCap: "Kiosk"
    },
    {
        STT: '2010009',
        TenDV: "Tai mũi họng",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Bỏ qua",
        NguonCap: "Hệ thống"
    },
    {
        STT: '20100010',
        TenDV: "Khám sản - phụ khoa",
        ThoiGianCap: "07:20 - 07/10/2021",
        TinhTrang: "Đang chờ",
        NguonCap: "Hệ thống"
    },
]

const Table: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    // const capSoState = useSelector((state: RootState) => state.capSo.value)
    // const dataFilter = useSelector((state: RootState) => state.capSo.dataFillter)
    // const statusFilter = useSelector((state: RootState) => state.capSo.isFillter)


    // useEffect(() => {
    //     dispatch(addCapSoValue(devices))
    // }, [])
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
                    {/* {statusFilter === false ? */}
                       { data.map((device) => (
                            <tr key={device.STT} >
                                <td>{device.STT}</td>
                                <td>{device.TenDV}</td>
                                <td>{device.ThoiGianCap}</td>
                                <td>{device.TinhTrang}</td>
                                <td>{device.NguonCap}</td>
                            </tr>))}
                        {/* : dataFilter.map((device) => (
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
                    } */}
                </tbody>
            </table>
        </div>
    );
}

export default Table;