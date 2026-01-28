import styles from './style.module.scss'
import {Button, Input, Label, Link} from "../../../../shared/ui";

export const Auth = () => {

    return (
        <main className={styles.main}>
            <div className={styles.login}>
                <div className={styles.container}>
                    <div className={styles.login__top}>
                        <h1 className={styles.login__title}>Авторизация</h1>
                    </div>
                    <form className={styles.loginForm}>
                        <div className={styles.loginForm__item}>
                            <Label for="email" className={styles.inputLabel}>E-mail</Label>
                            <Input type="email" name="email" id="email" required className={styles.login__input}/>
                        </div>
                        <div className={styles.loginForm__item}>
                            <Label for="password" className={styles.inputLabel}>Пароль</Label>
                            <Input type="password" name="password" id="password" className={styles.login__input}/>
                        </div>
                        <div className={styles.loginForm__item}>
                            <Button className={styles.loginBtn}>Войти</Button>
                        </div>
                        <div className={styles.loginForm__item}>
                            <Link href="/register">Зарегистрироваться</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}