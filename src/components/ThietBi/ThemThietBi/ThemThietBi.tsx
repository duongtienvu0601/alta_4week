import { memo, useState, useEffect, useRef } from "react";
import type { FC } from "react";
import classes from "./ThemThietBi.module.css";

interface ThemThietBiProps {
    className?: string;
  }
  
  const ThemThietBi: FC<ThemThietBiProps> = memo(function ThemThietBi(props = {}) {
    const { className } = props;
     
    return (
      <div className={`${classes.main} ${className}`}>
        <h1>Đây là from thêm </h1>
      </div>
    )
  })
export default ThemThietBi; 


