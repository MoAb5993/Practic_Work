import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Input, Label} from "../../../../shared/ui";
import {createTask, fetchTasks, reorderTask} from "../../../task";
import {Tasks} from "../Tasks";
import style from "./style.module.scss";
import {useDrop} from "react-dnd";

export const ListInner = ({id, boardId}) => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        newElement: ""
    });

    useEffect(() => {
        dispatch(fetchTasks({listId: id, boardId: boardId}));
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleNewTask = (e) => {
        e.preventDefault();
        if (form.newElement && form.newElement.trim().length > 0) {
            dispatch(createTask({name: form.newElement.trim(), listId: id})).then(() => {
                dispatch(fetchTasks({listId: id, boardId: boardId}));
            });
        }
    }

    const [, dropRef] = useDrop({
        accept: "task",
        drop (item, monitor) {
            const dragId = item.id;
            const dragList = item.listId;
            const dropList = id;

            dispatch(reorderTask({boardId: boardId, newListId: dropList, taskId: dragId, order: 0})).then(() => {
                dispatch(fetchTasks({listId: dropList, boardId: boardId})).then(() => {
                    dispatch(fetchTasks({listId: dragList, boardId: boardId}))
                })
            })
        }
    })

    return (
        <div className={style.elements} ref={dropRef}>
            <form className={style.elementsCreate} onSubmit={handleNewTask}>
                <Label htmlFor="newElement">
                    Новый элемент
                </Label>
                <Input
                    type="text"
                    id="newElement"
                    status='input'
                    name="newElement"
                    value={form.newElement}
                    onChange={handleChange}
                />
            </form>
            <Tasks boardId={boardId} idList={id}/>
        </div>
    )
}