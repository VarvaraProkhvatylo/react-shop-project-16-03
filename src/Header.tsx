import styles from './Header.module.scss'

type HeaderProps = {
    leftPart: string //обов'язкове
    text?: string //необов'язкове
    rightPart?: string
    order?: number
    background?: string
    color?: string
}

const Header = ({
    order,
    leftPart,
    text,
    rightPart,
    background = 'purple',
    color = 'white',
}: HeaderProps) => {
    return (
        <h1 className={`${styles.header}`}>
            {order} {leftPart} {text} {rightPart}
        </h1>
    )
}

export default Header
