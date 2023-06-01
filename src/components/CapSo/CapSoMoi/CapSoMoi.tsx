import React from "react";
import Dropdown from "../../Dropdowns/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { addValue, changeValue } from "../../../store/reducers/breadcrumbSlice";
import { ButtonOutline } from "../../Button/ButtonOutline";
import { ButtonFull } from "../../Button/ButtonFull";
import classes from "./CapSoMoi.module.css";
import { useNavigate } from "react-router-dom";
export const CapSoMoi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.breadcrumb.value);
  const navigate = useNavigate;
  const huybo = () => {
    const data = state.filter((item) => {
      return item.title !== "Cấp số mới";
    });
    dispatch(changeValue(data));
    console.log(data);
  };

  
const inso = () => {
  window.location.href = "/inso";
  }
  return (
    <div
      style={{
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#FFFFFF",
        boxShadow: "2px 2px 8px rgba(232, 239, 244, 0.8)",
        borderRadius: "16px",
      }}
    >
      <h1 className={classes.h1}>Cấp số mới</h1>
      <p className={classes.p}>Dịch vụ khách hàng lựa chọn</p>

      <Dropdown
        data={[
          "Khám tim mạch",
          "Khám sản - Phụ khoa",
          "Khám răng hàm mặt",
          "Khám tai mũi họng",
        ]}
        onSelecter={(e) => console.log(e.target.value)}
      />

      <div className={classes.FrameButton}>
        <div>
          <ButtonOutline onClick={() => huybo()} text="Hủy bỏ" />
        </div>

        <div>
          <ButtonFull onClick={inso} text="In số" />
        </div>
      </div>
    </div>
  );
};
