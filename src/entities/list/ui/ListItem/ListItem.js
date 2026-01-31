import style from './style.module.scss'
import check from '../../../../shared/img/check.svg'

export const ListItem = ({children}) => {

    return (
        <li className={style.elementItem}>
            <span className={style.elementPlaceholder}>{children}</span>
            <img src={check} alt="" className={style.checkIcon}/>
        </li>
    )
}