import styles from "./style.module.scss";

export const Link = ({children, href}) => {

    return (
        <a href={href} className={styles.Link}>
            {children}
        </a>
    )
}