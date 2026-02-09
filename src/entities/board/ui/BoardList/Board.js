import {Button, Input, Label} from "../../../../shared/ui";
import style from "./style.module.scss";

export const BoardList = () => {

    return (
        <body className={style.body}>
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.mainInner}>
                    <div className={style.boardCreate}>
                        <Button type='create' icon="ADD" >Создать доску</Button>
                        <div className={style.boardCreateForm}>
                            <div className={style.boardCreateFormItem}>
                                <Label htmlFor="boardName">Название доски</Label>
                                <Input
                                    type="text"
                                    name="boardName"
                                    id="boardName"
                                    status='input'
                                />
                            </div>
                            <div className={style.boardCreateFormItem}>
                                <Button type='accept'>Создать</Button>
                                <Button type='cancel'>Отменить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    )
}