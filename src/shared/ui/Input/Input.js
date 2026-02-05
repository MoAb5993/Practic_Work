import style from './style.module.scss'

export const Input = ({type, required, name, id, ...props}) => {

    return (
        <input {...props} className={style.input} type={type} required={required} name={name} id={id} />
    )
}