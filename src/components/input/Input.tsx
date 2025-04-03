import styles from './Input.module.scss';

export function Input() {

  return (
    <>
        <input placeholder='Adicione uma nova tarefa' className={styles.input}></input>
    </>
  )
}