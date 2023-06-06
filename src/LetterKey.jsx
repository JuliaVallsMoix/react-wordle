import styles from './LetterKey.module.css'

export default function LetterKey (props) {
    return (
        <div className={styles.key}>
            {props.children}
        </div>
    )
}