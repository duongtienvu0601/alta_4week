import classes from './Notification.module.css';
import { memo } from "react";
import type { FC } from "react";
interface NotificationProps {
    className?: string;
  }
const Notification: FC<NotificationProps> = memo(function Notification(props = {}){
    return (
        <div className={classes.container} >
            <div className={classes.header} >
                <p>Thông báo</p>
            </div>

            <div className={classes.content} >
                {[...Array(7)].map((_, index) => (
                    <div className={classes.item} key={index}>
                        <p className={classes.from} >Người dùng: Dương Tiến Vũ</p>
                        <p className={classes.date} >Thời gian nhận số: 10h20 ngày 24/4/2023</p>
                    </div>
                ))}
            </div>
        </div>
    )
})
export default Notification;
