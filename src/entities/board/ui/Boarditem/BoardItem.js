import { useState } from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {deleteBoards, editBoard} from "../../api";
import {Button, Input} from "../../../../shared/ui";
import style from './style.module.scss'
import {ENUM_LINK} from "../../../../shared/constans";

export const BoardItem = ({id, name, order}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateInput, setUpdateInput] = useState(false);

    const [form, setForm] = useState({
        newBoardName: ''
    })

    const newNameRequest = (e) => {
        e.preventDefault();
        if (form.newBoardName && form.newBoardName.trim().length > 0) {
            dispatch(editBoard({boardId: id, name: form.newBoardName}));
            console.log(id)
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value});
    }

    const handleState = () => {
        setUpdateInput(!updateInput);
    }

    const deleteHandler = () => {
        dispatch(deleteBoards(id));
    }

    const boardInner = () => {
        navigate(ENUM_LINK.getBoardPath(id, name));
    }

    return (
        <div>
            <div className='board'>
                <div className={style.boardContent}>
                    <div className={style.title}>
                        {name}
                    </div>
                    <div className={style.boardBtns}>
                        <Button type='auth' onClick={boardInner}>Открыть</Button>
                        <Button type='auth' onClick={deleteHandler}>Удалить</Button>
                        <Button type='auth' onClick={handleState}>Изменить</Button>
                    </div>
                    {updateInput && (
                        <form className={style.editForm} onSubmit={newNameRequest}>
                            <Input
                                value={form.newBoardName}
                                onChange={handleChange}
                                status='input'
                                id='newBoardName'
                                name='newBoardName'
                                type='text'
                            />
                        </form>
                    )}
                    {/*{id}*/}
                </div>
            </div>
        </div>
    )
}