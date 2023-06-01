export interface Account {
    id: string,
    userName: string,
    password: string
}
export interface Device {
    id: string;
    name: string;
    ipAddress: string;
    statusAction: string;
    statusConnect: string;
    service: string;
}


export interface CapsoType {
    STT: string,
    TenKH: string,
    TenDV: string,
    ThoiGianCap: string,
    HSD: string,
    TrangThai: string,
    NguonCap: string,
}
export interface BaoCaoType {
    STT: string,
    TenDV: string,
    ThoiGianCap: string,
    TinhTrang: string,
    NguonCap: string
}

export interface VaiTroType {
    id: string;
    TenVaiTro: string,
    SoNgDung: number,
    MoTa: string,
}
