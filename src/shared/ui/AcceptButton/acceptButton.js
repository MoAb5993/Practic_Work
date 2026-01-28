import style from './style.module.scss'

export const AcceptButton = ({children}) => {

    return (
        <button className={style.AcceptBtn}>
            {children}
        </button>
    )
}