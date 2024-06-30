import React from 'react'
import ReactDOM from 'react-dom/client'

function Title() {
    return <h1>Hello Title Component</h1>
}

function Content() {
    return (
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            rem mollitia ipsa unde cupiditate quo laudantium deserunt voluptatem
            delectus vitae, aliquam at alias dignissimos illum soluta, quae quis
            error possimus?
        </p>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Content />
    </React.StrictMode>
)
