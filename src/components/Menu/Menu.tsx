import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/"> Home </MenuItem>
            <MenuItem to="/products"> Products </MenuItem>
            <MenuItem to="/payment"> Payment </MenuItem>
            <MenuItem to="/cart"> Cart </MenuItem>
        </>
    )
}

export default Menu
