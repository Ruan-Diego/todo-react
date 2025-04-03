import logo from '../../assets/rocket.svg'
import styles from './Header.module.scss'

export function Header() {

  return (
    <>
        <header className={styles.header}>
            <img src={logo} alt='Logotipo da aplicação'></img>
            <h1 className={styles.titulo}>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
            </h1>
        </header>
    </>
  )
}