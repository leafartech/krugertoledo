import MyLink from '../MyLink'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={ styles.navbar }>
            <div className={ styles.logo }>
                <img src="./images/logo.png" alt="Logo do Escritório Krüger toledo" />
            </div>
            <ul className={ styles.menu }>
                <li>
                    <MyLink path="/">Início</MyLink>
                </li>
                <li>
                    <MyLink path="/escritorio">Nosso escritório</MyLink>
                    {/* <MyLink path="/escritorio">Sobre</MyLink> */}
                </li>
                <li>
                    <MyLink path="/equipe">Equipe</MyLink>
                </li>
                <li>
                    <MyLink path="/contato">Contato</MyLink>
                </li>
            </ul>
        </nav>
    )
}