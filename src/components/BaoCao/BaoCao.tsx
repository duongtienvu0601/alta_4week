import React from 'react'
import { Menubar } from '../MenuBar/Menubar';
import Table from './Table/Table';
import Header from '../../layouts/header'
import { ButtonAdd } from '../Button/ButtonAdd'
import FileSaver from 'file-saver';


const tableheader = ["Số thứ tự", "Tên dịch vụ", "Thời gian cấp", "Tình trạng", "Nguồn cấp"]

export const BaoCao = () => {
    function handleBellClick(): void {
        throw new Error('Function not implemented.')
    }

    function handleTaiVe(): void {
        var blob = new Blob(tableheader, {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "Hello.csv");
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
                    <div>
                        <p>Chọn thời gian</p>
                        <div>
                            Ngày bắt đầu
                        </div>

                        <div>
                            Ngày kết thúc
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

                        <div
                        // className={classes.FrameButton}
                        >
                            <ButtonAdd
                                text="Tải về"
                                onClick={handleTaiVe}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
