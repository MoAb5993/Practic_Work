import styles from "./style.module.scss";

export const Link = ({children, href, type}) => {

    return (
        <a href={href} className={styles[type]}>
            {children}
        </a>
    )

}