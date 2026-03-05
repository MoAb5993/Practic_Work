import style from "./style.module.scss";

export const Message = ({children, type}) => {
    return (
        <span className={style[type]}>
            {children}
        </span>
    )
}