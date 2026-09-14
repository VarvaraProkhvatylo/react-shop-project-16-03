import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    message: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            message:
                'Телефон був придбаний на розеці попрацював рівно дві неділі і перестав працювати дисплей заводський брак',
        },
        {
            name: 'John',
            message:
                'Придбала на заміну 14 про, на особливі відмінності не сподівалась, просто треба більше памяті, більший екран, та хотілось уже тайп сі нарешті. Але позитивну різницю вдалось відчути: порадувала якість 5-кратного зуму, і дисплей наче кращий, і швидкодія, і камера загалом (хоч і в 14 про все було супер), реверсивні зарядка теж приємний плюс. ',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        message: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            message: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.message === '') {
            alert('All fields are required!')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })

            setNewReview({
                name: '',
                message: '',
            })
        }
    }

    return (
        <div style={{ margin: '40px 0' }}>
            <Typography component={'h2'} variant="h4">
                Reviews
            </Typography>
            <div>
                {reviews.map((item: Review, i: number) => (
                    <Card key={i} variant="outlined" sx={{ margin: '20px 0' }}>
                        <CardContent>
                            <div>{item.name}</div>
                            <p>{item.message}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Please leave review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name?"
                        onChange={handleName}
                        value={newReview.name}
                    ></TextField>
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your message"
                        onChange={handleMessage}
                        value={newReview.message}
                    ></TextareaAutosize>
                </div>
                <Button type="submit" variant="outlined">
                    Send
                </Button>
            </form>
        </div>
    )
}
export default Reviews
