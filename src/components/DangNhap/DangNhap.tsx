import { memo, useState } from 'react';
import type { FC } from 'react';
import classes from './DangNhap.module.css';
import { ButtonLogin } from './ButtonLogin/ButtonLogin';
import { GroupPeopleIcon } from './GroupPeopleIcon';
import { GroupIcon } from './GroupIcon';
import { LogoAlta } from '../LogoAlta/LogoAlta';
import { UEyeSlash } from './UEyeSlash/UEyeSlash';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';
import { Account } from '../../types';
interface Props {
  className?: string;
  handleLogin?: () => void;
}

export const DangNhap: FC<Props> = memo(function DangNhap(props = {}) {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    errorMessage: false,
    hasClicked: false,
    passFogot: true,
    showPass: false
  });

  const handleLogin = async () => {
    const accountRef = collection(db, "account");
    let account: Account | undefined;
    const que = query(accountRef, where("username", "==", loginInfo.username), where("password", "==", loginInfo.password));
    const querySnapshot = await getDocs(que);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      const data = doc.data() as { password: string, username: string };
      account = {
        id: doc.id.toString(),
        userName: data.username,
        password: data.password
      };
    });

    if (account === undefined) {
      setLoginInfo({ ...loginInfo, errorMessage: true, hasClicked: true, passFogot: false })
      return;
    }

    // sessionStorage.setItem('isLoggedIn', 'true');

    // Hạn lưu 1 ngày
    const expirationDate = new Date(Date.now() + 86400000).toUTCString();
    const valueString = JSON.stringify(true);
    document.cookie = `isLoggedIn=${valueString}; expires=${expirationDate}`


    window.location.href = "/dashboard";
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });
  }

  const handleShowPass = () => {
    setLoginInfo({
      ...loginInfo,
      showPass: !loginInfo.showPass
    });
  }

  return (
    <div className={classes.main}>
      <div style={{ height: '90vh', width: 'calc(100% - 848px)' }} >
        <div className={classes.loginContainer}>
          <div className={classes.tenDangNhap}>Tên đăng nhập *</div>
          <input type="text" className={loginInfo.errorMessage ? classes.loginInputError : classes.loginInput} name="username" value={loginInfo.username} onChange={handleInputChange} />
        </div>
        <div className={classes.passContainer}>
          <div className={classes.matKhau}>Mật khẩu *</div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
            className={loginInfo.errorMessage ? classes.passInputError : classes.passInput}
          >
            <input className={loginInfo.showPass === false ? classes.passInputCustom : classes.passInputCustomShow} name="password" value={loginInfo.password} onChange={handleInputChange} />
            <UEyeSlash onClick={handleShowPass} />
          </div>

        </div>
        <a href='/quenmatkhau' style={{ textDecoration: 'none' }} className={loginInfo.passFogot ? classes.passMessageBefore : classes.passMessageAfter}>
          Quên mật khẩu?
        </a>
        {loginInfo.errorMessage && <div className={classes.errorMessage}>
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
      </div>
      <div className={classes.groupImage} style={{ marginTop: '0px' }}>
        <GroupPeopleIcon className={classes.icon2} />
        <div className={classes.heThong}>
          <div className={classes.textBlock}>Hệ thống</div>
          <div className={classes.xepHang}>QUẢN LÝ XẾP HÀNG</div>
        </div>
      </div>
      <div className={classes.logoAltaContainer}>
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


