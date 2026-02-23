import {useState} from "react";
// import {useDispatch} from "react-redux";
import {Input, Label} from "../../../../shared/ui";
import {ListItem} from "../ListItem";
import style from "./style.module.scss";

export const ListInner = () => {
    // const dispatch = useDispatch();

    const [form, setForm] = useState({
        newElement: ""
    });

    return (
        <div className={style.elements}>
            <div className={style.elementsCreate}>
                <Label htmlFor="new-element">Новый
                    элемент</Label>
                <Input
                    type="text"
                    id="new-element"
                    status='input'
                    name="new-element"
                    value={form.newElement}
                    onChange={(e) => setForm(e.target.value)}
                />
            </div>
            <ul className="elements-list">
                <ListItem>Элемент списка</ListItem>
                <ListItem>Элемент списка</ListItem>
                <ListItem>Элемент списка</ListItem>
            </ul>
        </div>
    )
}