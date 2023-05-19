import React from 'react'
import Dropdown from '../../Dropdowns/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { changeValue } from '../../../store/reducers/breadcrumbSlice';

export const CapSoMoi = () => {

    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.breadcrumb.value);

    const huybo = () => {
        const data = state.filter((item) => { return item.title !== "Cấp số mới" })
        dispatch(changeValue(data));
        console.log(data);
    }

    return (
        <div
            style={{
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                background: '#FFFFFF',
                boxShadow: '2px 2px 8px rgba(232, 239, 244, 0.8)',
                borderRadius: '16px',
            }}
        >
            <h1>Cấp số mới</h1>
            <p>Dịch vụ khách hàng lựa chọn</p>

            <Dropdown
                data={["Khám tim mạch", "Khám sản - Phụ khoa", "Khám răng hàm mặt", "Khám tai mũi họng"]}
                onSelecter={(e) => console.log(e.target.value)}
            />

            <div>
                <div
                    onClick={() => huybo()}
                >
                    <p>Hủy bỏ</p>
                </div>

                <div>
                    <p>In số</p>
                </div>
            </div>
        </div>
    )
}
