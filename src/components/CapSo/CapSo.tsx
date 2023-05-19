import React, { useEffect, useState } from 'react'
import classes from './CapSo.module.css';
import Header from '../../layouts/header';
import { Menubar } from '../MenuBar/Menubar';
import Dropdown from '../Dropdowns/Dropdown';
import Table from './Table/Table';
import { ButtonAdd } from '../Button/ButtonAdd';
import { CapSoMoi } from './CapSoMoi/CapSoMoi';
import { ChiTiet } from './ChiTiet/ChiTiet';
import { addValue, changeValue } from '../../store/reducers/breadcrumbSlice';
import { addChiTietCapSo } from '../../store/reducers/capsoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useLocation } from 'react-router-dom';



const tableheader = ["STT", "Tên khách hàng", "Tên dịch vụ", "Thời gian cấp", "Hạn sử dụng", "Trạng thái", "Nguồn cấp", ""]

export const Capso = () => {

    const dispatch = useDispatch();
    const urlLocation = useLocation();
    const state = useSelector((state: RootState) => state.breadcrumb.value);
    const [displayPage, setDisplayPage] = useState<string>("")
    const [showNotification, setShowNotification] = useState(false);

    const handleCapSoMoi = () => {
        dispatch(addValue({ title: "Cấp số mới", path: '/capsomoi' }))
    }
    const handleBellClick = () => {
        setShowNotification(!showNotification);
    };



    useEffect(() => {
        if (urlLocation.pathname === '/capso') {
            const data = [{
                title: "Cấp số",
                path: ''
            }, {
                title: "Danh sách cấp số",
                path: '/capso'
            }] as { title: string, path: string }[]

            dispatch(changeValue(data))
        }
    }, [])

    useEffect(() => {
        const getValueDisplay = state[state.length - 1] as { title: string, path: string };
        if (getValueDisplay === undefined) return;
        setDisplayPage(getValueDisplay.title)
    }, [state])

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <div
                style={{
                    position: 'relative',
                    height: '100vh',
                    width: '200px',
                }}
            >
                <Menubar />
            </div>

            <div
                style={{
                    position: 'relative',
                    height: '100vh',
                    width: 'calc(100% - 200px)',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        height: '95px'
                    }}
                >
                    <Header
                        handleBellClick={handleBellClick}
                    />
                </div>

                <div
                    style={{
                        paddingLeft: '30px',
                        height: '100%'
                    }}
                >
                    <p>Quản lý cấp số</p>

                    {displayPage === "Danh sách cấp số" &&
                        <React.Fragment>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <div>
                                    <label>Tên dịch vụ</label>
                                    <Dropdown
                                        data={["Tất cả", "Đang chờ", "Đã sử dụng", "Bỏ qua"]}
                                        onSelecter={(e) => console.log(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label>Tình trạng</label>
                                    <Dropdown
                                        data={["Tất cả", "Khám sản - Phụ khoa", "Khám răng hàm mặt", "Khám tai mũi họng"]}
                                        onSelecter={(e) => console.log(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label>Nguồn cấp</label>
                                    <Dropdown
                                        data={["Tất cả", "Kiosk", "Hệ thống"]}
                                        onSelecter={(e) => console.log(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <Table
                                    label={tableheader}
                                />
                                <div className={classes.FrameButton}>
                                    <ButtonAdd
                                        text="Cấp số mới"
                                        onClick={handleCapSoMoi}
                                    />
                                </div>

                            </div>

                        </React.Fragment>
                    }

                    {displayPage === "Cấp số mới" &&
                        <React.Fragment>
                            <CapSoMoi />
                        </React.Fragment>
                    }

                    {displayPage === "Chi tiết" &&
                        <React.Fragment>
                            <ChiTiet />
                        </React.Fragment>
                    }

                </div>


            </div>
        </div >
    )
}
