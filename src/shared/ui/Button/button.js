import style from './style.module.scss'

export const Button = ({children}) => {

    return (
        <button className={style.register}>
            {children}
        </button>
    )
}