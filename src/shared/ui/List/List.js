import style from './style.module.scss'
import expand from '../../img/expand.svg'

export const List = ({children}) => {

    return (
        <div className="lists__item">
            <div className={style.list}>
                {children}
                <img src={expand} alt="" className={style.expandIcon}/>
            </div>
        </div>
    )
}