import {Links} from "../index";
import style from './style.module.scss'
import logo from '../../img/logo.svg'
import {ENUM_LINK} from "../../constans";

export const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header_inner}>
                    <Links to={ENUM_LINK.BOARDS} className={style.headerLogo}>
                        <img src={logo} alt="Логотип"/>
                    </Links>
                    <h1 className={style.siteName}>Notes</h1>
                </div>
            </div>
        </header>
    )
}