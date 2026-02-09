import {Input, Label} from "../../../../shared/ui";
import {ListItem} from "../ListItem";
import style from "./style.module.scss";

export const ListInner = () => {

    return (
        <div className={style.elements}>
            <div className={style.elementsCreate}>
                <Label htmlFor="new-element">Новый
                    элемент</Label>
                <Input
                    type="text"
                    id="new-element"
                    status='input'
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