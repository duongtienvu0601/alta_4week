import React from 'react';
import {createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
import { DangNhap } from './components/DangNhap/DangNhap';
import Profile from './components/Profile/Profile';
import { DatLaiMatKhau } from './components/DangNhap/QuenMatKhau/DatLaiMatKhau';
import { QuenMatKhau } from './components/DangNhap/QuenMatKhau/QuenMatkhau';
import Dashboard from './components/Dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';


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
    element:<Dashboard/>,
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

