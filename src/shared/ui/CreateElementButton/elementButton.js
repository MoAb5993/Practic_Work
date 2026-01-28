import style from "./style.module.scss";
import plus from '../../img/plus.svg'

export const ElementButton = ({children}) => {

    return (
        <button className={style.boardCreate__btn}>
            <img src={plus} alt="" className={style.plusIcon}/>
            {children}
        </button>
    )
}