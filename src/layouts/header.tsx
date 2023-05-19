import React from 'react';
import classes from './Header.module.css';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
interface HeaderProps {
    handleBellClick: () => void;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ handleBellClick }) => {
    const state = useSelector((state: RootState) => state.breadcrumb.value);
    return (
        <React.Fragment>
            <div className={classes.TopBar}>
                <ul
                    className={classes.breadcrumb}
                >
                    {state.map((item) => {
                        return (
                            <li
                                key={item.title}
                            >
                                {item.path ?
                                    <a href={item.path}>{item.title}</a> :
                                    <p>{item.title}</p>
                                }
                            </li>
                        )
                    })}
                </ul>
                <div className={classes.frameBell} onClick={handleBellClick}>
                    <svg className={classes.Bell} width="32" height="32" viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#FFF2E7" />
                        <path d="M22.1168 18.0743L21.2834 16.691C21.1084 16.3827 20.9501 15.7993 20.9501 15.4577V13.3493C20.9501 11.391 19.8001 9.69935 18.1418 8.90768C17.7084 8.14102 16.9084 7.66602 15.9918 7.66602C15.0834 7.66602 14.2668 8.15768 13.8334 8.93268C12.2084 9.74102 11.0834 11.416 11.0834 13.3493V15.4577C11.0834 15.7993 10.9251 16.3827 10.7501 16.6827L9.90845 18.0743C9.57512 18.6327 9.50012 19.2493 9.70845 19.816C9.90845 20.3743 10.3834 20.8077 11.0001 21.016C12.6168 21.566 14.3168 21.8327 16.0168 21.8327C17.7168 21.8327 19.4168 21.566 21.0334 21.0243C21.6168 20.8327 22.0668 20.391 22.2834 19.816C22.5001 19.241 22.4418 18.6077 22.1168 18.0743Z" fill="#FFAC6A" />
                        <path d="M18.3582 22.6743C18.0082 23.641 17.0832 24.3327 15.9999 24.3327C15.3416 24.3327 14.6916 24.066 14.2332 23.591C13.9666 23.341 13.7666 23.0077 13.6499 22.666C13.7582 22.6827 13.8666 22.691 13.9832 22.7077C14.1749 22.7327 14.3749 22.7577 14.5749 22.7743C15.0499 22.816 15.5332 22.841 16.0166 22.841C16.4916 22.841 16.9666 22.816 17.4332 22.7743C17.6082 22.7577 17.7832 22.7493 17.9499 22.7243C18.0832 22.7077 18.2166 22.691 18.3582 22.6743Z" fill="#FFAC6A" />
                    </svg>
                </div>
                <div className={classes.avatarFrame}>
                    <img onClick={() => window.location.href = '/profile'} className={classes.imgAvatar} src="https://bookvexe.vn/wp-content/uploads/2023/04/suu-tam-25-anh-cute-avatar-dang-yeu-dieu-ban-can-de-len-mood-cho-ngay-moi_1.jpg" />
                    <div className={classes.TextName}>
                        <p className={classes.textname}>Xin Chào</p>
                        <p className={classes.name}>Dương Tiến Vũ</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;