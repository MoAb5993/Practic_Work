import {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {Trash, Pencil, ChevronDown} from 'lucide-react'
import {useDrag, useDrop} from "react-dnd";
import {editList, deleteList, fetchLists, reorderList} from "../../api";
import {ListInner} from "../ListInner";
import {Input} from "../../../../shared/ui";
import style from  './style.module.scss'

export const ListElement = ({id, name, order, boardId}) => {
    const dispatch = useDispatch();
    const ref = useRef();

    const [taskList, setTaskList] = useState(true);
    const [renameInput, setRenameInput] = useState(false);

    const [form, setForm] = useState({
        newListName: ''
    })

    const handleList = () => setTaskList(!taskList);
    const handleRename = () => {setRenameInput(!renameInput);}

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const renameList = (e) => {
        e.preventDefault();
        if (form.newListName && form.newListName.trim().length > 0) {
            dispatch(editList({name: form.newListName.trim(), listId: id, boardId: boardId.boardId})).then(() => {
                dispatch(fetchLists(boardId.boardId))
            });
            handleRename()
        }
    }

    const removeList = () => {
        dispatch(deleteList({listId: id, boardId: boardId.boardId})).then(() => {
            dispatch(fetchLists(boardId.boardId))
        });
    }

    const [{isDragging}, dragRef] = useDrag({
        type: 'list',
        item: {id, boardId, order},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const [, dropRef] = useDrop({
        accept: 'list',
        drop (item, monitor) {
            const dragId = item.id;
            const dragOrder = item.order;
            const dragBoard = item.boardId.boardId;
            const dropId = id;
            const dropOrder = order;

            dispatch(reorderList({boardId: dragBoard, listId: dragId, order: dropOrder})).then(() => {
                dispatch(reorderList({boardId: dragBoard, listId: dropId, order: dragOrder})).then(() => {
                    dispatch(fetchLists(boardId.boardId))
                })
            })
        }
    })

    dragRef(dropRef(ref))

    return (
        <div ref={ref} onDragOver={(e) => e.preventDefault()}>
            <div>
                <div className={style.placeholder}>
                    {renameInput ?
                        <form className="listRename" onSubmit={renameList}>
                            <Input
                                type='text'
                                status='input'
                                value={form.newListName}
                                onChange={handleChange}
                                id='newListName'
                                name='newListName'
                            />
                        </form>
                        : name}
                    <div className={style.listOptions}>
                        <Pencil
                            className={style.option}
                            size={20}
                            onClick={handleRename}
                        />
                        <Trash
                            className={style.option}
                            size={20}
                            onClick={removeList}
                        />
                        <ChevronDown
                            className={style.option}
                            size={20}
                            onClick={handleList}
                        />
                    </div>
                </div>
                {taskList && (
                    <ListInner id={id} boardId={boardId.boardId} />
                )}
            </div>
        </div>
    )
}

