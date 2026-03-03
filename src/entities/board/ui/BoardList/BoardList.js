import {useSelector} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {BoardItem} from "../Boarditem/BoardItem";
import style from './style.module.scss'

export const BoardList = () => {
    const boards = useSelector(state => state.board.boards);


    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.boardList}>
                {boards.map((board) =>
                    <BoardItem key={board.id} {...board}/>
                )}
            </div>
        </DndProvider>
    )
}