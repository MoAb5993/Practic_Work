import {useRef, useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {deleteBoards, editBoard, fetchBoards, reorderBoard} from "../../api";
import {Button, Input} from "../../../../shared/ui";
import {ENUM_LINK} from "../../../../shared/constans";
import style from './style.module.scss'

export const BoardItem = ({id, name, order}) => {
    const ref = useRef(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateInput, setUpdateInput] = useState(false);

    const [form, setForm] = useState({
        newBoardName: ''
    })

    const newNameRequest = (e) => {
        e.preventDefault();
        if (form.newBoardName && form.newBoardName.trim().length > 0) {
            dispatch(editBoard({boardId: id, name: form.newBoardName})).then(() => {
                dispatch(fetchBoards());
            });
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

    const deleteHandler = async () => {
        dispatch(deleteBoards(id)).then(() => {
            dispatch(fetchBoards());
        })
    }

    const boardInner = () => {
        navigate(ENUM_LINK.getBoardPath(id, name));
    }

    const [{isDragging}, dragRef] = useDrag({
        type: "board",
        item: {id, order},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const [, dropRef] = useDrop({
        accept: 'board',
        drop(item, monitor) {
            const dragId = item.id;
            const dragOrder = item.order;
            const dropId = id;
            const dropOrder = order;

            dispatch(reorderBoard({boardId: dragId, order: dropOrder})).then(() => {
                dispatch(reorderBoard({boardId: dropId, order: dragOrder})).then(() => {
                    dispatch(fetchBoards());
                });
            })
        }
    })

    dragRef(dropRef(ref))

    return (
        <div ref={ref} onDragOver={(e) => e.preventDefault()}>
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
                </div>
            </div>
        </div>
    )
}