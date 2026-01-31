import style from './style.module.scss'
import {Link} from "../Link";

export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footerInner}>
                    <Link href="https://kospbstin.ru/" type='tech-support'>Техническая поддержка</Link>
                </div>
            </div>
        </footer>
    )
}