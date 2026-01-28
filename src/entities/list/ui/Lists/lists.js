import {List} from "../../../../widgetes/List";
import {ListInner} from "../ListInner";
import expand from "../../../../shared/img/expand.svg";
import style from "./style.module.scss";
import {ElementButton} from "../../../../shared/ui";

export const Lists = () => {

    return (
        <main>
            <div className={style.listCreate}>
                <h1 className={style.board_name}>Моя Доска</h1>
                <ElementButton className="list-create__btn">
                    Новый список
                </ElementButton>
            </div>
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.main__inner}>
                        <div className={style.lists}>
                            <div className={style.lists__item}>
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
    )
}