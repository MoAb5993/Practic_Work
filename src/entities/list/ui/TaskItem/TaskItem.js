import {useState} from "react";
import {useDispatch} from "react-redux";
import {Trash, Pencil, X} from "lucide-react";
import {deleteTask, editTask} from "../../../task";
import style from './style.module.scss'
import {Input} from "../../../../shared/ui";

export const TaskItem = ({id, listId, name, isActive, order, boardId}) => {
    const dispatch = useDispatch();

    const [changeTask, setChangeTask] = useState(false)
    const [active, setActive] = useState(false)

    const [form, setForm] = useState({
        newTaskName: `${name}`
    })

    const handleChangeTask = () => {setChangeTask(!changeTask)}
    const handleChangeActive = () => {setActive(!active)}

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteTask({taskId: id, listId: listId, boardId: boardId.boardId}))
    }

    const editHandler = (e) => {
        e.preventDefault();
        if (form.newTaskName && form.newTaskName.trim().length > 0) {
            dispatch(editTask({name: form.newTaskName.trim(), taskId: id, listId: listId, isActive: active, boardId: boardId.boardId}))
        }
    }

    return (
        <li className={isActive ? style.deactivatedElement : style.activatedElement}>
            {changeTask ?
                <form className={style.renameTask} onSubmit={editHandler}>
                    <Input
                        type="checkbox"
                        name='isActive'
                        id='isActive'
                        value={active}
                        onChange={handleChangeActive}
                    />
                    <Input
                        type="text"
                        status='input'
                        name='newTaskName'
                        id='newTaskName'
                        value={form.newTaskName}
                        onChange={handleChange}
                    />
                    <X size={20} className={style.option} onClick={handleChangeTask}/>
                </form>
                :
                <>
                    <Trash size={20} className={style.option} onClick={deleteHandler}/>
                    {name}
                    <Pencil size={20} className={style.option} onClick={handleChangeTask}/>
                </>}
        </li>
    )
}