import style from './style.module.scss'

export const Input = ({type, required, name, id, status, ...props}) => {

    return (
        <input {...props} className={style[status]} type={type} required={required} name={name} id={id} />
    )
}