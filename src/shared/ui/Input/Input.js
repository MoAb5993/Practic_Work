import style from './style.module.scss'

export const Input = ({
                          type,
                          required,
                          name,
                          id,
                          status,
                          value,
                          onChange,
                          ...props
                      }) => {

    return (
        <input
            {...props}
            className={style[status]}
            type={type}
            required={required}
            name={name}
            id={id}
            onChange={onChange}
            value={value}
        />
    )
}