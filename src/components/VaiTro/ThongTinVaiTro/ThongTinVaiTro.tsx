import React from 'react'
import { ButtonOutline } from '../../Button/ButtonOutline';
import { ButtonFull } from '../../Button/ButtonFull';
import classes from './thongtinvaitro.module.css';
import { CheckBox } from '../../CheckBox/CheckBox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { changeValue } from '../../../store/reducers/breadcrumbSlice';
import { getOneVaitro } from '../../../store/reducers/vaiTroSlice';
import { VaiTroType } from '../../../types';


const chucnangA = ["Tất cả", "Chức năng x", "Chức năng y", "Chức năng z"];
const chucnangB = ["Tất cả", "Chức năng x", "Chức năng y", "Chức năng z"];

export const ThongTinVaiTro = () => {

    const dispatch = useDispatch()
    const breadcrumbState = useSelector((state: RootState) => state.breadcrumb.value);
    const vaitroState = useSelector((state: RootState) => state.vaitro.vaitro);

    function huybo(): void {
        let title: string = "Thêm vai trò";
        if(vaitroState.id !== ''){
            const vaitro: VaiTroType = {
                id: '',
                SoNgDung: 0,
                MoTa: '',
                TenVaiTro:''
            };
            dispatch(getOneVaitro(vaitro))
            title = "Cập nhật vai trò";
        }

        const data = breadcrumbState.filter((item) =>{ return item.title !== title})
        dispatch(changeValue(data))
    }

    function add(): void {
        throw new Error('Function not implemented.')
    }

    return (
        <React.Fragment>

            <div className={classes.body} >
                <p>Thông tin vai trò</p>

                <div>
                    <div className={classes.inputform}>
                        <div>
                            <p>Tên vài trò <span>*</span></p>
                            <input 
                                className={classes.nameInput} 
                                type="text" 
                                placeholder='Nhập tên vai trò'
                                value={vaitroState.TenVaiTro !== '' ? vaitroState.TenVaiTro : ''} 
                                onChange={(e) => console.log('')}
                            />
                        </div>

                        <div className={classes.discription} >
                            <p>Mô tả <span>*</span></p>
                            <textarea 
                                placeholder='Nhập mô tả' 
                                value={vaitroState.MoTa !== '' ? vaitroState.MoTa : ''} 
                                onChange={(e) => console.log('')}
                            />
                        </div>
                    </div>

                    <div className={classes.checkBox} >
                        <p>Phân quyền chức năng <span>*</span></p>
                        <div>
                            <p>Nhóm chức năng A</p>

                            <div>
                                {chucnangA.map((i) => (
                                    <CheckBox
                                        key={i}
                                        text={i}
                                        check={true}
                                        onCheck={(e) => console.log(e.target.value)}
                                    />
                                ))}
                            </div>

                            <p>Nhóm chức năng B</p>

                            <div>
                                {chucnangB.map((i) => (
                                    <CheckBox
                                        key={i}
                                        text={i}
                                        check={false}
                                        onCheck={(e) => console.log(e.target.value)}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <ButtonOutline text='Hủy bỏ' onClick={() => huybo()} />
                <ButtonFull text='Thêm' onClick={() => add()} />
            </div>

        </React.Fragment>
    )
}
