import {useSelector} from "react-redux";
import {TaskItem} from "../TaskItem";

export const Tasks = ({boardId, idList}) => {
    const tasks = useSelector(state => state.task.tasks);

    return (
        <ul className="taskList">
            {tasks
                .find(task => task.listId === idList)?.task
                .map((task) =>
                <TaskItem key={task.id} boardId={boardId} {...task} />
            )}
        </ul>
    )
}