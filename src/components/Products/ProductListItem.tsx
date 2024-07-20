import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.css'

type Props = {
    title: string
    description: string
}

const ProductListItem = ({ title, description }: Props) => {
    return (
        <>
            <Card variant="outlined" className="product-list-item">
                <CardContent>
                    <h3 className="product-title">{title}</h3>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type: phone</div>
                    <div className="product-features">Capacity: 64 GB</div>
                    <div className="product-price">$ 800</div>
                    <div className="btns-wrapper">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductListItem
