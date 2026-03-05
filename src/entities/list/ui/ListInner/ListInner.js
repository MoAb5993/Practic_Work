import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Input, Label} from "../../../../shared/ui";
import {createTask, fetchTasks} from "../../../task";
import {Tasks} from "../Tasks";
import style from "./style.module.scss";

export const ListInner = ({id, boardId}) => {
    const dispatch = useDispatch();
    // console.log("listId:",id.id)

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
            dispatch(createTask({name: form.newElement.trim(), listId: id}));
        }
    }

    return (
        <div className={style.elements}>
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
            <Tasks boardId={boardId}/>
        </div>
    )
}