import React from 'react';
import {createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
import { DangNhap } from './components/DangNhap/DangNhap';
import Profile from './components/Profile/Profile';
import { DatLaiMatKhau } from './components/DangNhap/QuenMatKhau/DatLaiMatKhau';
import { QuenMatKhau } from './components/DangNhap/QuenMatKhau/QuenMatkhau';
import Dashboard from './components/Dashboard/Dashboard';
import ThietBi from './components/ThietBi/ThietBi';
import DichVu from './components/DichVu/DichVu';
import ThemThietBi from './components/ThietBi/ThemThietBi/ThemThietBi';
import ChiTietThietBi from './components/ThietBi/ChiTietThietBi/ChiTietThietBi';
import { Capso } from './components/CapSo/CapSo';
import { Provider } from 'react-redux';
import store from './store/store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DangNhap/>,
  },
  {
    path: "/quenmatkhau",
    element: <QuenMatKhau/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path:"/datlaimatkhau",
    element:<DatLaiMatKhau/>,
  },
  {
    path:"/dashboard",
    element: <Dashboard/>,
  },
  {
    path:"/thietbi",
    element: <ThietBi/>
  },
  {
    path:"/themthietbi",
    element:<ThemThietBi/>,
  },
  {
    path:"/dichvu",
    element:<DichVu/>,
  },
  {
    path:"/capso",
    element:<Capso/>
  },
  {
    path:"/chitietthietbi",
    element:<ChiTietThietBi/>
  }
]);


function App() {
  return (
    // <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    // </div>
  );
}

export default App;

