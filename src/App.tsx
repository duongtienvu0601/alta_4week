import React from 'react';
import { Route,Routes,  createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
import { DangNhap } from './components/DangNhap/DangNhap';
import Home from './components/Home/Home';
import { DatLaiMatKhau } from './components/DangNhap/QuenMatKhau/DatLaiMatKhau';
import { QuenMatKhau } from './components/DangNhap/QuenMatKhau/QuenMatkhau';
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
    path: "/home",
    element: <Home/>,
  },
  {
    path:"/datlaimatkhau",
    element:<DatLaiMatKhau/>,
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

