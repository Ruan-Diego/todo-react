import { PlusCircle } from '@phosphor-icons/react'
import styles from './Button.module.scss'

export function Button() {

  return (
    <button className={styles.button}>
        <span>
            Add
        </span>
        <PlusCircle size={18} />
    </button>
  )
}