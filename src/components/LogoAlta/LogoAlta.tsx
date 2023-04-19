import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { GroupIcon } from './GroupIcon';
import classes from './LogoAlta.module.css';

interface Props {
  className?: string;
  classes?: {
    group?: string;
    root?: string;
  };
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 2:1329 */
export const LogoAlta: FC<Props> = memo(function LogoAlta(props = {}) {
  return (
    <div className={`${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group || ''} ${classes.group}`}>
        {props.swap?.group || <GroupIcon className={classes.icon} />}
      </div>
    </div>
  );
});
