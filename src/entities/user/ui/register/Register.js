import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router";
import {Input, Button, Label, Links} from "../../../../shared/ui";
import {Message} from "../../../../shared/ui/Message";
import {ENUM_LINK} from "../../../../shared/constans";
import {registerRequest} from "../../api";
import style from './style.module.scss'

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {error, token} = useSelector(state => state.user);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    const registration = () => {
        if (form.name && form.email && form.password && form.password === form.password_confirmation && !error) {
            dispatch(registerRequest({email: form.email, password: form.password, name: form.name}));
        }
        if (token) {
            navigate(ENUM_LINK.BOARDS);
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
                                status={form.name ? 'input' : 'empty'}
                            />
                            {!form.name && <Message type='error'>Обязательное поле</Message>}
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                name="email"
                                onChange={handleChange}
                                value={form.email}
                                type="email"
                                id="email"
                                status={form.email ? 'input' : 'empty'}
                            />
                            {!form.email && <Message type='error'>Обязательное поле</Message>}
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="password">Пароль</Label>
                            <Input
                                name="password"
                                onChange={handleChange}
                                value={form.password}
                                type="password"
                                id="password"
                                status={form.password ? 'input' : 'empty'}
                            />
                            {!form.password && <Message type='error'>Обязательное поле</Message>}
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="repeat-password">Подтвердите пароль</Label>
                            <Input
                                name="password_confirmation"
                                onChange={handleChange}
                                value={form.password_confirmation}
                                type="password"
                                id="repeat-password"
                                status={form.password_confirmation ? 'input' : 'empty'}
                            />
                            {!form.password_confirmation && <Message type='error'>Обязательное поле</Message>}
                        </div>
                        <div className={style.registerFormItem}>
                            <Button type='auth' onClick={registration}>
                                Зарегистрироваться
                            </Button>
                        </div>
                        <div className={style.registerFormItem}>
                            <nav>
                                <Links to={ENUM_LINK.MAIN} type='link'>Назад</Links>
                            </nav>
                        </div>
                    </div>
                </div>
                {error && <Message type='error'>Произошла ошибка: {error}</Message>}
            </div>
        </main>
    )
}