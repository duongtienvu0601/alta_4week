import { memo,useState } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonLogin.module.css'; // fixed import path

interface Props {
  className?: string;
  classes?: {
    rootButton?: string;
  };
  text?: {
    button?: ReactNode;
  };
  onClick?: () => void;
  navigateTo?: string;
}
export const ButtonLogin: FC<Props> = memo(function ButtonLogin(props = {}) {
  const handleLogin = () => {
    if (props.navigateTo) {
      // navigate to the specified component
      
    }
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.rootButton || ''} ${props.className || ''} ${classes.rootButton }`}
      onClick={handleLogin}
    >
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
    </button>
  );
});


