import style from './style.module.scss'
import {ENUM_ICONS} from "../../constans/icons";

export const Button = ({children, type, icon, ...props}) => {

    return (
        <button {...props} className={style[type]}>
            {icon && <img src={ENUM_ICONS[icon]} alt="" className={style.icon} />}
            {children}
        </button>
    )
}
