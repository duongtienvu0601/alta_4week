import classes from './chitiet.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { ButtonBack } from '../../Button/ButtonBack';
import { changeValue } from '../../../store/reducers/breadcrumbSlice';

export const ChiTiet = () => {

    const dispatch = useDispatch();
    const chiTietState = useSelector((state: RootState) => state.capSo.chiTiet);

    const quaylai = () => {
        const data = [{
            title: "Cấp số",
            path: ''
        }, {
            title: "Danh sách cấp số",
            path: '/capso'
        }] as { title: string, path: string }[]

        dispatch(changeValue(data))
    }

    const trangthaiStyle = (trangthai: string) => {
        let type: string = "";
        if (trangthai === "Đã sử dụng") {
            console.log('run');
            type = "classes.statusUse";
        }
        return type;
    }

    return (
        <div
            style={{
                height: '70%'
            }}
        >
            <p className={classes.header} >Thông tin cấp số</p>

            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <div className={classes.content}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: "auto auto"
                        }}
                    >
                        <div>
                            <p className={classes.text} >Họ và tên: <span>{chiTietState.TenKH}</span></p>
                        </div>

                        <div>
                            <p className={classes.text} >Nguồn cấp: <span>{chiTietState.NguonCap}</span></p>
                        </div>

                        <div>
                            <p className={classes.text} >Tên dịch vụ: <span>{chiTietState.TenDV}</span></p>
                        </div>

                        <div className={classes.status} >
                            <p >Trạng thái:</p>
                            <div
                                style={{
                                    display: 'inline-flex'
                                }}
                            >
                                <div />
                                <p>{chiTietState.TrangThai}</p>
                            </div>
                        </div>

                        <div>
                            <p className={classes.text} >Số thứ tự: <span>{chiTietState.STT}</span></p>
                        </div>

                        <div>
                            <p className={classes.text} >Thời gian cấp: <span>{chiTietState.ThoiGianCap}</span></p>
                        </div>
                        <div>
                            <p className={classes.text} >Hạn sử dụng: <span>{chiTietState.HSD}</span></p>
                        </div>
                        <div>
                            <p className={classes.text}>Địa chỉ Email: <span>nguyendung@gmail.com</span></p>
                        </div>
                    </div>
                </div>

                <ButtonBack onClick={() => quaylai()} />
            </div>
        </div>
    )
}
