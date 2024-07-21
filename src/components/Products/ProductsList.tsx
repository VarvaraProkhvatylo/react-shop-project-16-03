import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{ marginBottom: '30px' }}
            >
                Product List
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 15"
                        description="This is iPhone 15"
                        type="phone"
                        capacity="128 GB"
                        price="800"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 14"
                        description="This is iPhone 14"
                        type="phone"
                        capacity="64 GB"
                        price="700"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="iPhone 13"
                        description="This is iPhone 13"
                        type="phone"
                        capacity="64 GB"
                        price="500"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
