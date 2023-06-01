import React, { useEffect, useState } from 'react'
import { Menubar } from '../MenuBar/Menubar'
import Header from '../../layouts/header'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addValue, changeValue } from '../../store/reducers/breadcrumbSlice';
import { ButtonAdd } from '../Button/ButtonAdd';
import SearchBox from '../SearchBox/SearchBox'
import Table from './Table'
import { ThongTinVaiTro } from './ThongTinVaiTro/ThongTinVaiTro'
import { RootState } from '../../store/store'


const tableheader = ["Tên vài trò", "Số người dùng", "Mô tả", ""];

export const VaiTro = () => {

    const urlLocation = useLocation();
    const dispatch = useDispatch();

    const [displayPage, setDisplayPage] = useState<string>("Quản lý vai trò")
    const state = useSelector((state: RootState) => state.breadcrumb.value)

    function handleBellClick(): void {
        throw new Error('Function not implemented.')
    }

    useEffect(() => {
        if (urlLocation.pathname === '/vaitro') {
            const data = [{
                title: "Cài đặt hệ thống",
                path: ''
            }, {
                title: "Quản lý vai trò",
                path: '/vaitro'
            }] as { title: string, path: string }[]

            dispatch(changeValue(data))
        }
    }, [dispatch, urlLocation.pathname])

    useEffect(() => {
        const getValueDisplay = state[state.length - 1] as { title: string, path: string };
        if (getValueDisplay === undefined) return;
        setDisplayPage(getValueDisplay.title)
    }, [state])

    function handleCapSoMoi(): void {
        setDisplayPage("Thêm vai trò")
        dispatch(addValue({title: "Thêm vai trò", path: ''}))
    }

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
                    <div
                        style={{
                            position: 'relative',
                        }}
                    >
                        <p>Danh sách vai trò</p>
                        
                        {displayPage === "Quản lý vai trò" && <SearchBox /> }
                    </div>

                    {displayPage === "Quản lý vai trò" &&
                        <React.Fragment>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Table
                                    label={tableheader}
                                />
                                <div 
                                    // className={classes.FrameButton}
                                    style={{
                                        width: 'fit-content',
                                        height: 'fit-content'
                                    }}
                                >
                                    <ButtonAdd
                                        text="Thêm vai trò"
                                        onClick={handleCapSoMoi}
                                    />
                                </div>

                            </div>

                        </React.Fragment>
                    }

                    {displayPage === "Thêm vai trò" &&
                        <React.Fragment>
                            <ThongTinVaiTro />
                        </React.Fragment>
                    }

                    {displayPage === "Cập nhật vai trò" &&
                        <React.Fragment>
                            <ThongTinVaiTro />
                        </React.Fragment>
                    }

                </div>


            </div>
        </div >
    )
}
