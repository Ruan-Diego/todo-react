import styles from './Button.module.scss'

export function Button() {

  return (
    <>
        <button className={styles.button}>
            <span>
                Criar
            </span>
            <span className="material-symbols-outlined">
                add_circle
            </span>
        </button>
    </>
  )
}