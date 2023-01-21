import React from "react";
import style from './Main.module.scss';

export type MainProps = {

}

const Main:React.FC<MainProps> = () =>{
    const projects = ()=>{
        const res = [];
        for(let i=0;i<12;i++){
            res.push(<div className={style.item}></div>)
        }
        return res;
    };

    return (
        <main>
            <div className={style['title-section']}>
                <h1>Hello, This is Biyotteu's Blog</h1>
                <p>I'm a computer science researcher</p>
                <p>This blog provide my information and some interesting projects</p>
            </div>
            <div className={style['projects-section']}>
                <h3>Projects</h3>
                <div className={style.grid}>
                    {projects()}
                </div>
            </div>
        </main>
    )
}

export default Main;