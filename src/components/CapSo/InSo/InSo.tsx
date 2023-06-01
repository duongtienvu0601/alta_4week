import classes from "./InSo.module.css";
export const InSo = () => {
  return (
    <div className={classes.FrameMain}>
      <div className={classes.FrameData}>
        <a className={classes.Text}>Số thứ tự được cấp</a>
        <p className={classes.Text1}>2001201</p>
        <p className={classes.Text2}>
          DV: Khám răng hàm mặt<span className={classes.Text4}> (tại quầy số 1)</span>
        </p>
        <div className={classes.FrameTime}>
          <a className={classes.Text3}>Thời gian cấp: 09:30 11/10/2023</a>
          <p className={classes.Text3}>Hạn sử dụng: 17:30 11/10/2023</p>
        </div>
      </div>
    </div>
  );
};
