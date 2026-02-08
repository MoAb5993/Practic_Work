import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Message} from "../../../../shared/ui/Message";
import {Button, Input, Label, Link} from "../../../../shared/ui";
import {ENUM_LINK} from "../../../../shared/constans";
import {loginRequest} from "../../api";
import styles from './style.module.scss'

export const Auth = () => {
    const dispatch = useDispatch();

    const {error} = useSelector(state => state.user);

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const authRequest = () => {
        if (form.email && form.password) {
            dispatch(loginRequest({email: form.email, password: form.password}))
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
                                required
                            />
                        </div>
                        <div className={styles.loginFormItem}>
                            <Label for="password">Пароль</Label>
                            <Input
                                name="password"
                                onChange={handleChange}
                                value={form.password}
                                type="password"
                                id="password"
                                required
                            />
                        </div>
                        <div className={styles.loginFormItem}>
                            <Button onClick={authRequest} type='auth'>Войти</Button>
                        </div>
                        <div className={styles.loginFormItem}>
                            <Link href={ENUM_LINK.REGISTER} type='link'>Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
                {error && <Message type='error'>Произошла ошибка: {error}</Message>}
            </div>
        </main>
    )
}