import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD6zpIxLFaFqgjx1s3IjmKx5fqRwjRe3FE",
    authDomain: "alta-b2d24.firebaseapp.com",
    projectId: "alta-b2d24",
    storageBucket: "alta-b2d24.appspot.com",
    messagingSenderId: "360302145753",
    appId: "1:360302145753:web:df7ab100790d869d22cec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const CapSo = [
    {
        STT: '2001001',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tim mạch',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001002',
        TenKH: 'Huynh Ai Van',
        TenDV: 'Khám sản - Phụ khoa',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đã sử dụng',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001003',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám hô hấp',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001004',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tổng quát',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001005',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Kham tim mach   ',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đã sử dụng',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001006',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tổng quát',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Hệ thống"
    },
    {
        STT: '2001007',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tim mạch',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Bỏ qua',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001008',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tim mạch',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Đang chờ',
        NguonCap: "Kiosk"
    },
    {
        STT: '2001009',
        TenKH: 'Le Huynh Ai Van',
        TenDV: 'Khám tai mũi họng',
        ThoiGianCap: '14:35-18/05/2023',
        HSD: '14:35-19/05/2023',
        TrangThai: 'Bỏ qua',
        NguonCap: "Hệ thống"
    },
]

CapSo.forEach(async (item) => {
    try {
        const docRef = await addDoc(collection(firestore, "capso"), item);
        console.log("Đã thêm dữ liệu với ID:", docRef.id);
    } catch (error) {
        console.error("Lỗi khi thêm dữ liệu:", error);
    }
});



