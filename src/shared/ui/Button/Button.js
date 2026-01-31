import style from './style.module.scss'
import plus from "../../img/plus.svg";

export const Button = ({children, type}) => {

    switch (type) {
        case 'auth':
            return (
                <button className={style.register}>
                    {children}
                </button>
            )
        case 'accept':
            return (
                <button className={style.AcceptBtn}>
                    {children}
                </button>
            )
        case 'cancel':
            return (
                <button className={style.cancelBtn}>
                    {children}
                </button>
            )
        case 'create':
            return (
                <button className={style.boardCreateBtn}>
                    <img src={plus} alt="" className={style.plusIcon}/>
                    {children}
                </button>
            )
        default:
            return null;
    }
}