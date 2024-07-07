type HeaderProps = {
    leftPart: string //обов'язкове
    text?: string //необов'язкове
    rightPart?: string
    order?: number
}

const Header = ({ order, leftPart, text, rightPart }: HeaderProps) => {
    return (
        <h1>
            {order} {leftPart} {text} {rightPart}
        </h1>
    )
}

export default Header
