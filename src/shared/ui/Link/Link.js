import {Link} from "react-router";
import styles from "./style.module.scss";

export const Links = ({children, to, type}) => {

    return (
        <Link to={to} className={styles[type]}>
            {children}
        </Link>
    )

}