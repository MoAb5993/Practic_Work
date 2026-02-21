import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {Button, Input, Label} from "../../../../shared/ui";
import {createBoard, fetchBoards} from "../../api";
import style from "./style.module.scss";
import {BoardList} from "../BoardList/BoardList";

export const Boards = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        boardName: ""
    })

    const [newBoard, setNewBoard] = useState(false)

    const handleCreate = () => {
        setNewBoard(!newBoard)
    }

    const boardCreate = (e) => {
        e.preventDefault();
        if (form.boardName && form.boardName.trim().length > 0) {
            dispatch(createBoard({name: form.boardName}));
        }
    }

    useEffect(() => {
        dispatch(fetchBoards());
    },)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value}
        );
    }

    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.mainInner}>
                    <div className={style.boardCreate}>
                        <Button
                            type='create'
                            icon="ADD"
                            onClick={handleCreate}
                        >
                            Создать доску
                        </Button>
                        {newBoard && (
                            <form className={style.boardCreateForm} onSubmit={boardCreate}>
                                <div className={style.boardCreateFormItem}>
                                    <Label htmlFor="boardName">Название доски</Label>
                                    <Input
                                        type="text"
                                        name="boardName"
                                        id="boardName"
                                        status='input'
                                        value={form.boardName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={style.boardCreateFormItem}>
                                    <Button type='accept' onClick={boardCreate}>Создать</Button>
                                    <Button type='cancel' onClick={handleCreate}>Отменить</Button>
                                </div>
                            </form>
                        )}

                    </div>
                </div>
                <BoardList/>
            </div>
        </main>
    )
}