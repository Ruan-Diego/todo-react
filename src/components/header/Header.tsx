import { ListChecks } from '@phosphor-icons/react'
import styles from './Header.module.scss'

export function Header() {

  return (
    <>
        <header className={styles.header}>
            <ListChecks size={48} color='#8284FA'/>
            <h1 className={styles.titulo}>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </h1>
        </header>
    </>
  )
}