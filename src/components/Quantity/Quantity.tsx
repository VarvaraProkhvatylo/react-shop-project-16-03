import { Button, TextField } from '@mui/material'

type Props = {
    onDecrementClick: () => void
    onIncrementClick: () => void
    count: number
    min: number
}

const Quantity = ({
    onDecrementClick,
    onIncrementClick,
    count,
    min,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={onDecrementClick}
                // disabled={count <= 1}
                disabled={count <= min}
            >
                -
            </Button>
            <TextField size="small" value={count} />
            <Button variant="outlined" onClick={onIncrementClick}>
                +
            </Button>
        </div>
    )
}

export default Quantity
