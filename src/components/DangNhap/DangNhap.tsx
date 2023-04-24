import { memo, useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import classes from './DangNhap.module.css';
import { ButtonLogin } from './ButtonLogin/ButtonLogin';
import { GroupPeopleIcon } from './GroupPeopleIcon';
import { GroupIcon } from './GroupIcon';
import { LogoAlta } from '../LogoAlta/LogoAlta';
import { UEyeSlash } from './UEyeSlash/UEyeSlash';

interface Props {
  className?: string;
  handleLogin?: () => void;
}


export const DangNhap: FC<Props> = memo(function DangNhap(props = {}) {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [passFogot, setPassFogot] = useState(true);
  const [showPass, setShowPass] = useState(false);

const handleLogin = () => {
    if (hasClicked) {
      window.location.reload();
    } else if (username === "duongtienvu" && password === "123456") {
      window.location.href = "http://localhost:3000/profile";
    } else {
      setHasClicked(true);
      setErrorMessage(true);
      setPassFogot(false);
    }
  }
  return (
    <div
    // className={`${resets.storybrainResets} ${classes.root}`}
    >
      <div className={classes.main}>

        <div style={{ height: '90vh', width: 'calc(100% - 848px)' }} >

          <div className={classes.loginContainer}>
            <div className={classes.tenDangNhap}>Tên đăng nhập *</div>
            <input type="text" className={errorMessage ? classes.loginInputError : classes.loginInput} value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className={classes.passContainer}>
            <div className={classes.matKhau}>Mật khẩu *</div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
              className={errorMessage ? classes.passInputError : classes.passInput}
            >
              <input className={showPass === false ? classes.passInputCustom : classes.passInputCustomShow }value={password} onChange={(e) => setPassword(e.target.value)} />
              <UEyeSlash onClick={() => {
                setShowPass(!showPass)
              }} />
            </div>

          </div>
          <a href='/quenmatkhau' style={{ textDecoration: 'none' }} className={passFogot ? classes.passMessageBefore : classes.passMessageAfter}>
            Quên mật khẩu?
          </a>
          {errorMessage && <div className={classes.errorMessage}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_84_5581)">
                <path d="M10.228 18.8327C14.8304 18.8327 18.5613 15.1017 18.5613 10.4993C18.5613 5.89698 14.8304 2.16602 10.228 2.16602C5.62561 2.16602 1.89465 5.89698 1.89465 10.4993C1.89465 15.1017 5.62561 18.8327 10.228 18.8327Z" stroke="#E73F3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.228 13.834H10.2364" stroke="#E73F3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.228 7.16602V10.4993" stroke="#E73F3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_84_5581">
                  <rect width="20" height="20" fill="white" transform="translate(0.228027 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <p>
              Sai mật khẩu hoặc tên đăng nhập
            </p></div>}

          <ButtonLogin
            className={classes.button2}
            text={{
              button: <p className={classes.button}>Đăng nhập</p>,
            }}
            onClick={handleLogin}
          />
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
        <div className={`${classes.groupImage} ${classes.groupImageNew}`}>
          <GroupPeopleIcon className={classes.icon2} />
          <div className={classes.heThong}>
            <div className={classes.textBlock}>Hệ thống</div>
            <div className={classes.xepHang}>QUẢN LÝ XẾP HÀNG</div>
          </div>
        </div>
      </div>
    </div>
  );
});

