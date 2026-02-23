import {useSelector} from "react-redux";
import {TaskItem} from "../TaskItem";
import style from './style.module.scss'

export const Tasks = (boardId) => {
    const tasks = useSelector(state => state.task.tasks);

    return (
        <ul className="taskList">
            {tasks.map((task) =>
                <TaskItem key={task.id} boardId={boardId} {...task} />
            )}
        </ul>
    )
}