import {useSelector} from "react-redux";
import {BoardItem} from "../Boarditem/BoardItem";
import style from './style.module.scss'

export const BoardList = () => {
    const boards = useSelector(state => state.board.boards);


    return (
        <div className={style.boardList}>
            {boards.map((board) =>
                <BoardItem key={board.id} {...board} />
            )}
        </div>
    )
}