import React from "react";
import classes from "../Table/Table.module.css";
import ButtonUpdate from "../../Button/ButtonUpdate";
import Dropdown from "../../Dropdowns/Dropdown";

interface Props {
    devices: Device;
}

interface Device {
    id: string;
    name: string;
    ipAddress: string;
    statusAction: string;
    statusConnect: string;
    service: string;
}

const TableRow: React.FC<Props> = ({ devices }) => {
    const { id, name, ipAddress, statusAction, statusConnect, service } = devices;

    const dotClass = classes.dot;
    const statusActionClass =
        statusAction === "Kết nối" ? classes["dot-green"] : classes["dot-red"];
    const statusConnectClass =
        statusConnect === "Hoạt động" ? classes["dot-green"] : classes["dot-red"];

    const serviceCellContent = (
        <>
            {service}
            {ButtonUpdate({ onClick: () => console.log("Xem thêm"), text: "Xem thêm" })}
        </>
    );

    return (
        <div>
            {/* <div className={classes.container}> */}
                {/* <table className={classes["device-list"]}> */}
                    {/* <thead>
                        <tr>
                            <th>Mã thiết bị</th>
                            <th>Tên thiết bị</th>
                            <th>Địa chỉ IP</th>
                            <th>Trạng thái hoạt động</th>
                            <th>Trạng thái kết nối</th>
                            <th>Dịch vụ</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead> */}
                   
                {/* </table> */}
            {/* </div> */}
        </div> 
    );
};

export default TableRow;
