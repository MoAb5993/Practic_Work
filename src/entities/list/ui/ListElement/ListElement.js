import {useState} from "react";
import {useDispatch} from "react-redux";
import {Trash, Pencil, ChevronDown} from 'lucide-react'
import {editList, deleteList} from "../../api";
import {ListInner} from "../ListInner";
import {Input} from "../../../../shared/ui";
import style from  './style.module.scss'

export const ListElement = ({id, name, order, boardId}) => {
    const dispatch = useDispatch();

    const [taskList, setTaskList] = useState(false);
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
            dispatch(editList({name: form.newListName.trim(), listId: id, boardId: boardId.boardId}));
        }
    }

    const removeList = () => {
        dispatch(deleteList({listId: id, boardId: boardId.boardId}));
    }


    return (
        <>
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
        </>
    )
}

