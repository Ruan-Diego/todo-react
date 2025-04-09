import { ClipboardText } from '@phosphor-icons/react'
import styles from './Empty.module.scss'

export function Empty() {

  return (
    <div>
        <main className={styles.main}>
            <ClipboardText  size={48} weight="thin" color='#333333' />
            <span className={styles.fraseUm}>You haven't added any tasks yet.</span>
            <span className={styles.fraseDois}>Create and organize your tasks.</span>
        </main>
    </div>


  )
}