type HeaderProps = {
    leftPart: string //обов'язкове
    text?: string //необов'язкове
    rightPart?: string
    order?: number
    background?: string
}

const Header = ({
    order,
    leftPart,
    text,
    rightPart,
    background = 'purple',
}: HeaderProps) => {
    return (
        <h1
            style={{
                background: background,
                color: 'white',
                fontSize: '30px',
                padding: '20px',
            }}
        >
            {order} {leftPart} {text} {rightPart}
        </h1>
    )
}

export default Header
