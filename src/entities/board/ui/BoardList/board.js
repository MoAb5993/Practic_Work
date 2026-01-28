import {AcceptButton, CancelButton, ElementButton, Input, Label} from "../../../../shared/ui";
import style from "./style.module.scss";

export const BoardList = () => {

    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.main__inner}>
                    <div className={style.boardCreate}>
                        <ElementButton>Создать доску</ElementButton>
                        <form action="put" className={style.boardCreateForm}>
                            <div className={style.boardCreateForm__item}>
                                <Label htmlFor="boardName">Название доски</Label>
                                <Input type="text" name="boardName" id="boardName"/>
                            </div>
                            <div className={style.boardCreateForm__item}>
                                <AcceptButton>Создать</AcceptButton>
                                <CancelButton>Отменить</CancelButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}