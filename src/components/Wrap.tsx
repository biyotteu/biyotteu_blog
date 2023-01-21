import React from "react";
import style from "./Wrap.module.scss"

export type WrapProps = {
    children: React.ReactNode;
};
const Wrap:React.FC<WrapProps> = ({children})=>{
    return (
        <div className={style.wrap}>{children}</div>
    )
}

export default Wrap;
