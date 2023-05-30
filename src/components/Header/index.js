import Navbar from '../Navbar'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={ styles.header }>
            <Navbar />
            <img src="./images/bg.png" alt="" className={ styles.bg } />
        </header>
    )
}