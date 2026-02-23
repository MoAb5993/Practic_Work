import {useSelector} from "react-redux";
import {ListElement} from "../ListElement";
import style from './style.module.scss'

export const TaskLists = (boardId) => {
    const lists = useSelector(state => state.list.lists)

    return (
        <div className={style.lists}>
            {lists.map((list) =>
                <ListElement key={list.id} boardId={boardId} {...list} />
            )}
        </div>
    )
}