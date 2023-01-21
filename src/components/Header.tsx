import React from "react";
import style from './Header.module.scss';

export type HeaderProps = {

}

const Header: React.FC<HeaderProps> = React.memo(()=>{
    return (
        <header className={style.header}>
            <a href="/"><h1 className={style.h1}>Biyotteu</h1></a>
            <nav>
                <ul className="style.ul">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Skill</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
});
export default Header;