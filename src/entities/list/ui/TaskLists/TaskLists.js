import {useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {ListElement} from "../ListElement";
import style from './style.module.scss'

export const TaskLists = (boardId) => {
    const lists = useSelector(state => state.list.lists)

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.lists}>
                {lists.map((list) =>
                    <ListElement key={list.id} boardId={boardId} {...list} />
                )}
            </div>
        </DndProvider>
    )
}