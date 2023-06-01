import React, { useState, useEffect } from "react";
import classes from './Table.module.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addValue } from "../../store/reducers/breadcrumbSlice";
import { addCapSoValue, addChiTietCapSo, changeCapSoFillter } from "../../store/reducers/capsoSlice";

import { VaiTroType } from "../../types";
import { getAllVaiTro, getOneVaitro } from "../../store/reducers/vaiTroSlice";

interface Props {
    className?: string,
    label: string[]
}


const Table: React.FC<Props> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const vaiTroState = useSelector((state: RootState) => state.vaitro.vaitros)
    const dataFilter = useSelector((state: RootState) => state.capSo.dataFillter)
    const statusFilter = useSelector((state: RootState) => state.capSo.isFillter)


    const capnhat = (data: VaiTroType) => {
        dispatch(getOneVaitro(data))
        dispatch(addValue({title: "Cập nhật vai trò", path: ''}))
    }


    useEffect(() => {
        dispatch(getAllVaiTro())
    }, [dispatch])
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
                    {
                    // statusFilter === false ?
                        vaiTroState.map((vaitro) => (
                            <tr key={vaitro.id} >
                                <td>{vaitro.TenVaiTro}</td>
                                <td>{vaitro.SoNgDung}</td>
                                <td>{vaitro.MoTa}</td>
                                <td
                                    onClick={() => capnhat(vaitro)}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Cập nhật
                                </td>
                            </tr>))
                        // : dataFilter.map((device) => (
                        //     <tr key={device.STT} >
                        //         <td>{device.STT}</td>
                        //         <td>{device.TenKH}</td>
                        //         <td>{device.TenDV}</td>
                        //         <td>

                        //             {device.ThoiGianCap}
                        //         </td>
                        //         <td>{device.HSD}</td>
                        //         <td>{device.TrangThai}</td>
                        //         <td>{device.NguonCap}</td>
                        //         <td
                        //             onClick={() => chiTiet(device)}
                        //             style={{
                        //                 cursor: 'pointer'
                        //             }}
                        //         >
                        //             Chi tiết
                        //         </td>
                        //     </tr>)
                        // )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;