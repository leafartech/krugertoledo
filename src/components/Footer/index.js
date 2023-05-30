import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={ styles.footer }>
            <img src="./images/logo.png" alt="Escritório KRÜGER TOLEDO advocacia" />
            <p>2023 KRÜGER TOLEDO © Todos os direitos reservados.</p>
        </footer>
    )
}