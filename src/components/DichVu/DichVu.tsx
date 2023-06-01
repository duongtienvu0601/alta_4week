import { memo, useState, useEffect, useRef } from "react";
import Header from "../../layouts/header";
import { Menubar } from "../MenuBar/Menubar";
import type { FC } from "react";
import classes from "./DichVu.module.css";
import Notification from "../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { addValue, changeValue } from "../../store/reducers/breadcrumbSlice";
import { ButtonFull } from "../Button/ButtonFull";
import { ButtonOutline } from "../Button/ButtonOutline";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
interface DichVuProps {
  className?: string;
}

const DichVu: FC<DichVuProps> = memo(function DichVu(props = {}) {
  const { className } = props;
  const [showNotification, setShowNotification] = useState(false);
  const handleBellClick = () => {
    setShowNotification(!showNotification);
  };
  const VaiTro = [
    {
      TenVaiTro: "Kế Toán",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
    {
      TenVaiTro: "Kế Toán",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
    {
      TenVaiTro: "Kế Toán",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
    {
      TenVaiTro: "Kế Toán",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
    {
      TenVaiTro: "SuperAdmin",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
    {
      TenVaiTro: "Admin",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
    {
      TenVaiTro: "Quản lý",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
    {
      TenVaiTro: "Bác sĩ",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
    {
      TenVaiTro: "Lế Tân",
      MoTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
      SoNgDung: 6,
    },
  ];
  const state = useSelector((state: RootState) => state.breadcrumb.value);
  const addData = async () => {
    const capsoRef = collection(db, "quanly_vaitro");
    let vaitro = VaiTro;
    VaiTro.forEach(async (vaitro) => {
      try {
        const capsoRef = await addDoc(collection(db, "quanly_vaitro"), vaitro);
        console.log("Đã thêm dữ liệu với ID:", capsoRef.id);
      } catch (error) {
        console.error("Lỗi khi thêm dữ liệu:", error);
      }
    });
    VaiTro.forEach(async (vaitro) => {
      try {
        await setDoc(doc(capsoRef, vaitro.TenVaiTro), vaitro);
        console.log("Đã thêm dữ liệu với ID:", vaitro.TenVaiTro);
      } catch (error) {
        console.error("Lỗi khi thêm dữ liệu:", error);
      }
    });
  };

  return (
    <div className={`${classes.main} ${className}`}>
      <Header className={classes.header} handleBellClick={handleBellClick} />
      <ul className={classes.breadcrumb}>
        {state.map((item) => {
          return (
            <li key={item.title}>
              {item.path ? (
                <a href={item.path}>{item.title}</a>
              ) : (
                <p>{item.title}</p>
              )}
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: "260px" }}>
        <ButtonFull onClick={addData} text="Thêm dịch vụ" />
        <ButtonOutline onClick={() => console.log("hello")} text="Hủy bỏ" />
      </div>
      <h1 style={{ marginLeft: "400px" }}> Đây là from Dịch Vụ</h1>
      {showNotification && <Notification />}
      <Menubar />
    </div>
  );
});
export default DichVu;
