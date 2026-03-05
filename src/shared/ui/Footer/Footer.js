import style from './style.module.scss'

export const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footerInner}>
                    <a href="https://kospbstin.ru/" className={style.tech}>Техническая поддержка</a>
                </div>
            </div>
        </footer>
    )
}