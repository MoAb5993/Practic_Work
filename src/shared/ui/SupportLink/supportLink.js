import style from "./style.module.scss";

export const SupportLink = ({children}) => {

    return (
        <a href="https://kospbstin.ru/" className={style.technicalSupport}>{children}</a>
    )
}