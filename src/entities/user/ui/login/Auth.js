import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router";
import {Message} from "../../../../shared/ui/Message";
import {Button, Input, Label, Links} from "../../../../shared/ui";
import {ENUM_LINK} from "../../../../shared/constans";
import {loginRequest} from "../../api";
import styles from './style.module.scss'

export const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {error} = useSelector(state => state.user);

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const authRequest = () => {
        if (form.email && form.password) {
            dispatch(loginRequest({email: form.email, password: form.password}));
        }
        if (localStorage.getItem("token")) {
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
        <main className={styles.main}>
            <div className={styles.login}>
                <div className={styles.container}>
                    <div className={styles.loginTop}>
                        <h1 className={styles.loginTitle}>Авторизация</h1>
                    </div>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <Label for="email">E-mail</Label>
                            <Input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                type="email"
                                id="email"
                                status={form.email ? 'input' : 'empty'}
                            />
                            {!form.email && <Message type='error'>Обязательное поле</Message>}
                        </div>
                        <div className={styles.loginFormItem}>
                            <Label for="password">Пароль</Label>
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
                        <div className={styles.loginFormItem}>
                            <Button onClick={authRequest} type='auth'>Войти</Button>
                        </div>
                        <div className={styles.loginFormItem}>
                            <nav>
                                <Links to={ENUM_LINK.REGISTER} type='link'>Регистрация</Links>
                            </nav>
                        </div>
                    </div>
                </div>
                {error && <Message type='error'>Произошла ошибка: {error}</Message>}
            </div>
        </main>
    )
}