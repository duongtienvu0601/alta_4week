import { memo, useState } from 'react';
import type { FC } from 'react';
import { ReactComponent as MySVG } from '../../../img/Frame.svg';
import classes from '../QuenMatKhau/QuenMatKhau.module.css';
import { GroupIcon } from '../GroupIcon';
import { LogoAlta } from '../../LogoAlta/LogoAlta';

interface Props {
  className?: string;
  handleLogin?: () => void;
}

export const QuenMatKhau: FC<Props> = memo(function QuenMatKhau(props = {}) {

  return (
    <div>
      <div className={classes.main}>
        <div>
          <div>
            <p className={classes.RePass}>Đặt lại mật khẩu</p>
            <div className={classes.ReMailContainer}>
              <p className={classes.RePassMail}>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
              <input className={classes.TextReMail} type='text'></input>
            </div>
          </div>
          <div>
            <button className={classes.ButtonHuy} onClick={() => { window.location.href = '/DangNhap' }}>Hủy</button>
            <button className={classes.ButtonTiepTuc} onClick={() => { window.location.href = '/DatLaiMatKhau' }}>Tiếp tục</button>
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

        <div className={`${classes.groupImage} ${classes.groupImageNew}`}>
          <MySVG />
        </div>
      </div>
    </div>
  );
});

