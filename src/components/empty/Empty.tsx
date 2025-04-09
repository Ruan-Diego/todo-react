import { ClipboardText } from '@phosphor-icons/react'
import styles from './Empty.module.scss'

export function Empty() {

  return (
    <div>
        <main className={styles.main}>
            <ClipboardText  size={48} weight="thin" color='#333333' />
            <span className={styles.fraseUm}>Você ainda não tem tarefas cadastradas</span>
            <span className={styles.fraseDois}>Crie tarefas e organize seus itens a fazer</span>
        </main>
    </div>


  )
}