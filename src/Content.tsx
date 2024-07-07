type ContentType = {
    title: string
    text1: string
    text2?: string
}

/// Component via Arrow Function
const Content = ({ title, text1, text2 }: ContentType) => {
    return (
        <>
            <h2> {title} </h2>
            <p> {text1} </p>
            <p> {text2} </p>
        </>
    )
}

export default Content
