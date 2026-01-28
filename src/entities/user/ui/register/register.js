import style from './style.module.scss'
import {Input, Button, Label, Link} from "../../../../shared/ui";

export const Register = () => {

    return (
        <main className={style.main}>
            <div className={style.register}>
                <div className={style.container}>
                    <div className={style.register__top}>
                        <h1 className={style.register__title}>Регистрация</h1>
                    </div>
                    <form action="post" className={style.registerForm}>
                        <div className={style.registerForm__item}>
                            <Label htmlFor="name" className="input-label">Имя</Label>
                            <Input type="text" id="name"  required/>
                        </div>
                        <div className={style.registerForm__item}>
                            <Label htmlFor="email" className="input-label">E-mail</Label>
                            <Input type="email" id="email" required/>
                        </div>
                        <div className={style.registerForm__item}>
                            <Label htmlFor="password" className="input-label">Пароль</Label>
                            <Input type="password" id="password" required/>
                        </div>
                        <div className={style.registerForm__item}>
                            <Label htmlFor="repeat-password" className="input-label">Подтвердите пароль</Label>
                            <Input type="password" id="repeat-password" required/>
                        </div>
                        <div className={style.registerForm__item}>
                            <Button>
                                Зарегистрироваться
                            </Button>
                        </div>
                        <div className={style.registerForm__item}>
                            <Link href="/">Назад</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}