import styles from './Section.module.css'

export default function Section({ children, type, pd, bg, top, flex, sm }) {
    //MUDAR SECTION DE ACORDO COM O TYPE (FLEX-COL OU FLEX-ROW)

    return (
        <section className={ `${sm ? styles.pdt : ''} ${flex ? styles.flex : ''} ${top ? styles.top : ''} ${ bg ? styles.bg : ''} ${pd ? styles.pd : ''} ${styles.section}` }>
            <div className={ styles.content}>
                {children}
            </div>
        </section>
    )
}