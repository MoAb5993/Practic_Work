import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {useState} from "react";
import {Button, Input, Label} from "../../../../shared/ui";
import {createBoard} from "../../api";
import {ENUM_LINK} from "../../../../shared/constans";
import style from "./style.module.scss";

export const BoardList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        boardName: ""
    })

    const boardCreate = () => {
        if (form.boardName && form.boardName.trim().length > 0) {
            dispatch(createBoard({name: form.boardName.trim()}));
            navigate(ENUM_LINK.LIST);
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value}
        );
    }

    return (
        <body className={style.body}>
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.mainInner}>
                    <div className={style.boardCreate}>
                        <Button type='create' icon="ADD" >Создать доску</Button>
                        <div className={style.boardCreateForm}>
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
                                <Button type='cancel'>Отменить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    )
}