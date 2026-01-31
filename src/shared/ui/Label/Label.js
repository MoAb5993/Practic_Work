import style from './style.module.scss'

export const Label = ({children, htmlFor}) => {

    return (
        <label className={style.inputLabel} htmlFor={htmlFor}>
            {children}
        </label>
    )
}