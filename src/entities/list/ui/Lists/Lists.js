import {List} from "../../../../shared/ui";
import {ListInner} from "../ListInner";
import expand from "../../../../shared/img/expand.svg";
import style from "./style.module.scss";
import {Button} from "../../../../shared/ui";

export const Lists = () => {

    return (
        <body className={style.body}>
        <main>
            <div className={style.listCreate}>
                <h1 className={style.boardName}>Моя Доска</h1>
                <Button type='create' srcIcon>
                    Новый список
                </Button>
            </div>
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.mainInner}>
                        <div className={style.lists}>
                            <div className={style.listsItem}>
                                <div className={style.placeholder}>
                                    Список
                                    <img src={expand} alt="" className={style.expandIcon}/>
                                </div>
                                <ListInner/>
                            </div>
                            <List>Список 1</List>
                            <List>Список 2</List>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    )
}