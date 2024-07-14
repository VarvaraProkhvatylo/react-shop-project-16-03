import { Button, Card, CardContent } from '@mui/material'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h3>iPhone 15</h3>
                <p>This is iPhone 15</p>
                <div>Type: phone</div>
                <div>Capacity: 64 GB</div>
                <div>$ 800</div>
                <Button>Add to cart</Button>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
