import style from './style.module.scss'

export const Input = ({type, required, name, id}) => {

    return (
        <input className={style.input} type={type} required={required} name={name} id={id} />
    )
}