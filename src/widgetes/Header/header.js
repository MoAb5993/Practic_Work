import {Link} from "../../shared/ui";
import style from './style.module.scss'
import logo from '../../shared/img/logo.svg'

export const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header_inner}>
                    <Link href="#" className={style.headerLogo}>
                        <img src={logo} alt="Логотип"/>
                    </Link>
                    <h1 className={style.siteName}>Notes</h1>
                </div>
            </div>
        </header>
    )
}