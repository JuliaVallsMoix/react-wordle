import styles from './LetterKey.module.css'

export default function LetterKey ({ children }) {
    return (
        <div className={styles.key}>
            {children}
        </div>
    )
}