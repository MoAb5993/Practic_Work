import styles from './style.module.scss'
import {Button, Input, Label, Link} from "../../../../shared/ui";
import {ENUM_LINK} from "../../../../shared/constans";

export const Auth = () => {

    return (
        <main className={styles.main}>
            <div className={styles.login}>
                <div className={styles.container}>
                    <div className={styles.loginTop}>
                        <h1 className={styles.loginTitle}>Авторизация</h1>
                    </div>
                    <form className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <Label for="email">E-mail</Label>
                            <Input type="email" name="email" id="email" required />
                        </div>
                        <div className={styles.loginFormItem}>
                            <Label for="password">Пароль</Label>
                            <Input type="password" name="password" id="password" required/>
                        </div>
                        <div className={styles.loginFormItem}>
                            <Button type='auth'>Войти</Button>
                        </div>
                        <div className={styles.loginFormItem}>
                            <Link href={ENUM_LINK.REGISTER} type='link'>Зарегистрироваться</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}