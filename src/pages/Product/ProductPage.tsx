import { useParams } from 'react-router'
import { getProductsObject, Product, productsArray } from 'utils/productsArray'

type Props = {}

type ProductsObject = {
    [id: number]: Product
}

const ProductPage = (props: Props) => {
    const productsObject: ProductsObject = getProductsObject(productsArray)
    const { id } = useParams()

    return <div>{productsObject[parseInt(id!)].title}</div>
}

export default ProductPage
