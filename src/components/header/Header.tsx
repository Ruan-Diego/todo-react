import logo from '../../assets/rocket.svg'
import styles from './Header.module.scss'

export function Header() {

  return (
    <>
    <header className={styles.header}>
        <img src={logo} alt='logotipo'></img>
        <div className={styles.titulo}>
            <div className={styles.to}>to</div>
            <div className={styles.do}>do</div>
        </div>

    </header>
    </>
  )
}