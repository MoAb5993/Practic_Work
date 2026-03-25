import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {TaskLists} from "../TaskLists";
import {Input, Button, Label} from "../../../../shared/ui";
import {fetchLists, createNewList} from "../../api";
import style from "./style.module.scss";

export const Lists = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const {id} = useParams();

    const [createList, setCreateList] = useState(false);
    const listName = searchParams.get('title');

    const [form, setForm] = useState({
        newList: ''
    });

    const handleState = () => {
        setCreateList(!createList);
    }

    const handleChange = (e) => {
        setForm( {
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.newList && form.newList.trim().length > 0) {
            dispatch(createNewList({name: form.newList, boardId: id})).then(() => {
                dispatch(fetchLists(id));
            });
        }
    }

    useEffect(() => {
        dispatch(fetchLists(id));
    })

    return (
        <main>
            <div className={style.listCreate}>
                <h1 className={style.boardName}>{listName}</h1>
                <Button type='create' onClick={handleState} icon='ADD'>
                    Новый список
                </Button>
            {createList && (
                <form className={style.newList} onSubmit={handleSubmit}>
                    <div className={style.newListItem}>
                        <Label htmlFor='newList'>Название листа</Label>
                        <Input
                            value={form.newList}
                            onChange={handleChange}
                            status='input'
                            type='text'
                            id='newList'
                            name='newList'
                        />
                    </div>
                    <div className={style.newListItem}>
                        <Button type='accept' onClick={handleSubmit}>Создать</Button>
                        <Button type='cancel' onClick={handleState}>Отменить</Button>
                    </div>
                </form>
            )}
            </div>
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.mainInner}>
                        <TaskLists boardId={id}/>
                    </div>
                </div>
            </div>
        </main>
    )
}