import style from './style.module.scss'
import icon from "../../img/plus.svg";

export const Button = ({children, type, srcIcon}) => {

    return (
        <button className={style[type]}>
            {srcIcon && <img src={icon} alt="" className={style.icon} />}
            {children}
        </button>
    )
}
