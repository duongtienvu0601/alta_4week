import { memo, useState } from "react";
import type { FC } from "react";
import { ReactComponent as MySVG } from "../../../img/Frame.svg";
import classes from "../QuenMatKhau/DatLaiMatKhau.module.css";
import { GroupIcon } from "../GroupIcon";
import { LogoAlta } from "../../LogoAlta/LogoAlta";
import { UEyeSlash } from "../UEyeSlash/UEyeSlash";

interface Props {
  className?: string;
  handleLogin?: () => void;
}

export const DatLaiMatKhau: FC<Props> = memo(function DatLaiMatKhau(
  props = {}
) {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={classes.main}>
      <div>
        <p className={classes.TextReset}>Đặt lại mật khẩu mới</p>
        <div className={classes.passContainer}>
          <div className={classes.matKhau}>Mật khẩu</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input className={classes.inputPass}></input>
            <UEyeSlash
              className={classes.IconShow}
              onClick={() => {
                setShowPass(!showPass);
              }}
            />
          </div>
        </div>

        <div className={classes.resetContainer}>
          <div className={classes.resetPass}>Nhập lại mật khẩu</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input className={classes.inputPass}></input>
            <UEyeSlash
              className={classes.IconShow}
              onClick={() => {
                setShowPass(!showPass);
              }}
            />
          </div>
        </div>
        <div>
          <button className={classes.buttonConfirm}>Xác nhận</button>
        </div>

        <div className={`${classes.groupImage} ${classes.groupImageNew}`}>
          <MySVG />
        </div>
        <LogoAlta
          className={classes.logoAlta}
          classes={{ group: classes.group }}
          swap={{
            group: (
              <div className={classes.group}>
                <GroupIcon className={classes.icon} />
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
});
