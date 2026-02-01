import style from './style.module.scss'
import {Input, Button, Label, Link} from "../../../../shared/ui";
import {ENUM_LINK} from "../../../../shared/constans";

export const Register = () => {

    return (
        <main className={style.main}>
            <div className={style.register}>
                <div className={style.container}>
                    <div className={style.registerTop}>
                        <h1 className={style.registerTitle}>Регистрация</h1>
                    </div>
                    <form action="post" className={style.registerForm}>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="name">Имя</Label>
                            <Input type="text" id="name"  required/>
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="email" id="email" required/>
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="password">Пароль</Label>
                            <Input type="password" id="password" required/>
                        </div>
                        <div className={style.registerFormItem}>
                            <Label htmlFor="repeat-password">Подтвердите пароль</Label>
                            <Input type="password" id="repeat-password" required/>
                        </div>
                        <div className={style.registerFormItem}>
                            <Button type='auth'>
                                Зарегистрироваться
                            </Button>
                        </div>
                        <div className={style.registerFormItem}>
                            <Link href={ENUM_LINK.MAIN} type='link'>Назад</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}