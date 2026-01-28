import style from './style.module.scss'

export const CancelButton= ({children}) => {

    return (
        <button className={style.cancelBtn}>
            {children}
        </button>
    )
}