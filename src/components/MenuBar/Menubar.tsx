import { memo } from 'react';
import type { FC } from 'react';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

import resets from '../_resets.module.css';

const menuItems = [
  { label: 'Home', icon: <FaHome /> },
  { label: 'Profile', icon: <FaUser /> },
  { label: 'Settings', icon: <FaCog /> },
  { label: 'Notifications', icon: <FaBell /> },
  { label: 'Messages', icon: <FaEnvelope /> },
];

interface Props {
  className?: string;
}

export const Menubar: FC<Props> = memo(function Menubar(props = {}) {
  return (
    <div className="container">
  <div className="resets.flex">
    <div>
      <img src="logo.png" alt="Logo" />
    </div>
    <div className="resets.flexColumn">
      <div className="resets.flex">
        <div className="icon"><i className="fa fa-home"></i></div>
        <div>Home</div>
      </div>
      <div className="resets.flex">
        <div className="icon"><i className="fa fa-user"></i></div>
        <div>Profile</div>
      </div>
      <div className="resets.flex">
        <div className="icon"><i className="fa fa-envelope"></i></div>
        <div>Messages</div>
      </div>
      <div className="resets.flex">
        <div className="icon"><i className="fa fa-cog"></i></div>
        <div>Settings</div>
      </div>
      <div className="resets.flex">
        <div className="icon"><i className="fa fa-sign-out"></i></div>
        <div className="logout">Logout</div>
      </div>
    </div>
  </div>
</div>

  );
});

