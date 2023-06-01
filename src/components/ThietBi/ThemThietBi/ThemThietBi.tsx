import { memo, useState, useEffect, useRef } from "react";
import Header from "../../../layouts/header";
import { Menubar } from "../../MenuBar/Menubar";
import type { FC } from "react";
import classes from "./ThemThietBi.module.css";
import Notification from "../../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { addValue, changeValue } from "../../../store/reducers/breadcrumbSlice";
import { ButtonCapNhat } from "../../Button/ButtonCapNhat";
import { ButtonFull } from "../../Button/ButtonFull";
import { ButtonOutline } from "../../Button/ButtonOutline";
interface ThemThietBiProps {
  className?: string;
}

const ThemThietBi: FC<ThemThietBiProps> = memo(function ThemThietBi(
  props = {}
) {
  const { className } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [showNotification, setShowNotification] = useState(false);
  const [choose, setchoose] = useState("value");
  const handlechooseChange = (e: any) => {
    setchoose(e.target.value);
  };
  const handleBellClick = () => {
    setShowNotification(!showNotification);
  };
  const CapNhat = () => {
    dispatch(
      addValue({
        title: "Cập nhật thiết bị",
        path: "/capnhatthietbi",
      })
    );
    navigate("/capnhatthietbi");
  };
  const state = useSelector((state: RootState) => state.breadcrumb.value);
  return (
    <div className={classes.main}>
      <div className={classes.TopBar}>
        <Header className={classes.header} handleBellClick={handleBellClick} />
      </div>
      {/* <ul className={classes.breadcrumb}>
        {state.map((item) => {
          return (
            <li key={item.title} >
              {item.path ?
                <a href={item.path}>{item.title}</a> :
                <p>{item.title}</p>
              }
            </li>
          )
        })}
      </ul> */}
      <div className={classes.frameAdd}>
        <a className={classes.textA}>Quản lý thiết bị</a>
        <label>Thông tin thiết bị</label>
        <div className={classes.frameMaThietBi}>
          <a className={classes.TextBox}>
            Mã thiết bị: <span className={classes.star}>*</span>{" "}
          </a>

          <input
            className={classes.input}
            type="text"
            placeholder="Nhập mã thiết bị"
          />
        </div>

        <div className={classes.frameTenThietBi}>
          <a className={classes.TextBox}>
            Tên thiết bị: <span className={classes.star}>*</span>{" "}
          </a>
          <input
            className={classes.input}
            type="text"
            placeholder="Nhập tên thiết bị"
          />
        </div>

        <div className={classes.frameDiaChi}>
          <a className={classes.TextBox}>
            Địa chỉ IP: <span className={classes.star}>*</span>{" "}
          </a>

          <input
            className={classes.input}
            type="text"
            placeholder="Nhập địa chỉ IP"
          />
        </div>
        <div className={classes.frameLoaiThietBi}>
          <a className={classes.TextBox}>
            Loại thiết bị: <span className={classes.star}>*</span>{" "}
          </a>
          <div>
            <select
              className={classes.selectContainer}
              id="value"
              value={choose}
              onChange={handlechooseChange}
            >
              <option disabled={true} value="default">
                Chọn loại thiết bị
              </option>
              <option className={classes.selectOption} value="one">
                Kiosk
              </option>
              <option className={classes.selectOption} value="two">
                Display counter
              </option>
            </select>
          </div>
        </div>

        <div className={classes.frameTenDangNhap}>
          <a className={classes.TextBox}>
            Tên đăng nhập: <span className={classes.star}>*</span>{" "}
          </a>
          <input
            className={classes.input}
            type="text"
            placeholder="Nhập tài khoản"
          />
        </div>

        <div className={classes.frameMatKhau}>
          <a className={classes.TextBox}>
            Mật Khẩu: <span className={classes.star}>*</span>{" "}
          </a>

          <input
            className={classes.input}
            type="password"
            placeholder="Nhập mật khẩu"
          />
        </div>

        <div className={classes.frameDichVu}>
          <a className={classes.TextBox}>
            Dịch vụ sử dụng: <span className={classes.star}>*</span>{" "}
          </a>
          <input
            className={classes.inputDichVu}
            type="text"
            placeholder="Nhập dịch vụ sử dụng"
          />
          <a className={classes.Text1}>
            <span className={classes.star}>* </span>Là trường thông tin bắt buộc
          </a>
        </div>
      </div>
      <div className={classes.FrameButton}>
        <ButtonCapNhat
          text="Cập nhật thiết bị"
          onClick={CapNhat}
        />
      </div>
      {showNotification && <Notification />}
      <Menubar />
      <div className={classes.button}>
        <ButtonOutline onClick={() => console.log("Them")} text="Hủy bỏ" />
        <ButtonFull onClick={() => console.log("Them")} text="Thêm thiết bị" />
        {/* <button className={classes.button1}>Hủy bỏ</button>
        <button className={classes.button2}>Thêm thiết bị</button> */}
      </div>
    </div>
  );
});
export default ThemThietBi;
