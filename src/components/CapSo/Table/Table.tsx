import React, { useState, useEffect } from "react";
import classes from "./Table.module.css";
// import ButtonUpdate from "../Button/ButtonUpdate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
// import { useNavigate } from 'react-router-dom';
import { addValue } from "../../../store/reducers/breadcrumbSlice";
import {
  addCapSoValue,
  addChiTietCapSo,
  changeCapSoFillter,
} from "../../../store/reducers/capsoSlice";

import { CapsoType } from "../../../types";

interface Props {
  className?: string;
  label: string[];
}

const capsos: CapsoType[] = [
  {
    STT: "2001001",
    TenKH: "Le Huynh Ai Van",
    TenDV: "Khám tim mạch",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Đang chờ",
    NguonCap: "Kiosk",
  },
  {
    STT: "2001002",
    TenKH: "Huynh Ai Van",
    TenDV: "Khám sản - Phụ khoa",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Đã sử dụng",
    NguonCap: "Kiosk",
  },
  {
    STT: "2001003",
    TenKH: "Le Huynh Ai Van",
    TenDV: "Khám hô hấp",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Đang chờ",
    NguonCap: "Kiosk",
  },
  {
    STT: "2001004",
    TenKH: "Le Huynh Ai Van",
    TenDV: "Khám tổng quát",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Đang chờ",
    NguonCap: "Kiosk",
  },
  {
    STT: "2001005",
    TenKH: "Le Huynh Ai Van",
    TenDV: "Kham tim mach   ",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Đã sử dụng",
    NguonCap: "Kiosk",
  },
  {
    STT: "2001006",
    TenKH: "Le Huynh Ai Van",
    TenDV: "Khám tổng quát",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Đang chờ",
    NguonCap: "Hệ thống",
  },
  {
    STT: "2001007",
    TenKH: "Le Huynh Ai Van",
    TenDV: "Khám tim mạch",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Bỏ qua",
    NguonCap: "Kiosk",
  },
  {
    STT: "2001008",
    TenKH: "Le Huynh Ai Van",
    TenDV: "Khám tim mạch",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Đang chờ",
    NguonCap: "Kiosk",
  },
  {
    STT: "2001009",
    TenKH: "Le Huynh Ai Van",
    TenDV: "Khám tai mũi họng",
    ThoiGianCap: "14:35-18/05/2023",
    HSD: "14:35-19/05/2023",
    TrangThai: "Bỏ qua",
    NguonCap: "Hệ thống",
  },
];

const Table: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const capSoState = useSelector((state: RootState) => state.capSo.value);
  const dataFilter = useSelector((state: RootState) => state.capSo.dataFillter);
  const statusFilter = useSelector((state: RootState) => state.capSo.isFillter);
  const dotClass = classes.dot;
  const statusClass = (status: string) => {
    return status === "Đang chờ"
      ? classes["dot-blue"]
      : status === "Đã sử dụng"
      ? classes["dot-gray"]
      : status === "Bỏ qua"
      ? classes["dot-red"]
      : null;
  };

  const chiTiet = (data: CapsoType) => {
    dispatch(addChiTietCapSo(data));
    dispatch(addValue({ title: "Chi tiết", path: "/chitiet" }));
  };

  useEffect(() => {
    dispatch(addCapSoValue(capsos));
    console.log(statusFilter);
  }, []);

  const filteredData = Array.isArray(dataFilter) ? dataFilter : [];
  return (
    <div className={classes.container}>
      <table className={classes.deviceList}>
        <thead>
          <tr>
            {props.label.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {statusFilter === false
            ? capSoState.map((capso) => (
                <tr key={capso.STT}>
                  <td>{capso.STT}</td>
                  <td>{capso.TenKH}</td>
                  <td>{capso.TenDV}</td>
                  <td>{capso.ThoiGianCap}</td>
                  <td>{capso.HSD}</td>
                  <td>
                    <span
                      className={`${dotClass} ${statusClass(capso.TrangThai)}`}
                    />
                    {capso.TrangThai}
                  </td>
                  <td>{capso.NguonCap}</td>
                  <td
                    onClick={() => chiTiet(capso)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Chi tiết
                  </td>
                </tr>
              ))
            : filteredData?.map((capso) => (
                <tr key={capso.STT}>
                  <td>{capso.STT}</td>
                  <td>{capso.TenKH}</td>
                  <td>{capso.TenDV}</td>
                  <td>{capso.ThoiGianCap}</td>
                  <td>{capso.HSD}</td>
                  <td>{capso.TrangThai}</td>
                  <td>{capso.NguonCap}</td>
                  <td
                    onClick={() => chiTiet(capso)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Chi tiết
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
