import style from './style.module.scss'
import {Input, Button, Label, Link} from "../../../../shared/ui";
import {ENUM_LINK} from "../../../../shared/constans";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {registerRequest} from "../../api";

export const Register = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    const registration = () => {
        if (form.name && form.email && form.password && form.password === form.password_confirmation) {
            dispatch(registerRequest({email: form.email, password: form.password, name: form.name}));
        }
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }


    return (
        <main className={style.main}>
            <div className={style.register}>
                <div className={style.container}>
                    <div className={style.registerTop}>
                        <h1 className={style.registerTitle}>Регистрация</h1>
                    </div>
                    <div className={style.registerForm}>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="name">Имя</Label>
                            <Input
                                name="name"
                                onChange={handleChange}
                                value={form.name}
                                type="text"
                                id="name"
                                required
                            />
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                name="email"
                                onChange={handleChange}
                                value={form.email}
                                type="email"
                                id="email"
                                required
                            />
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="password">Пароль</Label>
                            <Input
                                name="password"
                                onChange={handleChange}
                                value={form.password}
                                type="password"
                                id="password"
                                required
                            />
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="repeat-password">Подтвердите пароль</Label>
                            <Input
                                name="password_confirmation"
                                onChange={handleChange}
                                value={form.password_confirmation}
                                type="password"
                                id="repeat-password"
                                required/>
                        </div>
                        <div className={style.registerFormItem}>
                            <Button type='auth' onClick={registration}>
                                Зарегистрироваться
                            </Button>
                        </div>
                        <div className={style.registerFormItem}>
                            <Link href={ENUM_LINK.MAIN} type='link'>Назад</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}