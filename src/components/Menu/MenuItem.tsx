import { NavLink } from 'react-router-dom'
import './MenuItem.css'
import { Button } from '@mui/material'

type Props = {
    children: React.ReactNode
    to: string
}

const MenuItem = ({ to, children }: Props) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? 'nav-menu-active' : 'nav-menu'
            }
        >
            <Button color="inherit">{children}</Button>
        </NavLink>
    )
}

export default MenuItem
