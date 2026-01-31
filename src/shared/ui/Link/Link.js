import styles from "./style.module.scss";

export const Link = ({children, href, type}) => {

    if (type === 'tech-support') {
        return (
            <a href="https://kospbstin.ru/" className={styles.technicalSupport}>
                {children}
            </a>
        )
    } else {
        return (
            <a href={href} className={styles.Link}>
                {children}
            </a>
        )
    }

}