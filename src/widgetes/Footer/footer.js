import style from './style.module.scss'
import {SupportLink} from "../../shared/ui/SupportLink";

export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footerInner}>
                    <SupportLink href="https://kospbstin.ru/" className={style.technicalSupport}>Техническая поддержка</SupportLink>
                </div>
            </div>
        </footer>
    )
}