import Link from 'next/link'
import styles from './Card.module.css'

export default function Card({children, path, name, position, text, href}) {
    return (
        <div className={ styles.card }>
            <div className={ styles.image }>
                <img src={`./images/${path}.png`} alt={name} />
            </div>
            <div className={ styles.body }>
                <div>
                    <h2>{name}</h2>
                    <h4>{position}</h4>
                </div>
                <p>{text}</p>
                <Link href={href}>Mais informações</Link>
            </div>
        </div>
    )
}