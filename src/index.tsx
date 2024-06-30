import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => <h1>Hello Title Component</h1>

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

/// Component via Arrow Function

const Content1 = () => (
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus et
        quam vel aut nemo fuga. Exercitationem sit dolores minus nisi repellat
        beatae odit eligendi repellendus iste, dolorum soluta ducimus eos.
    </p>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Content />
        <Content1 />
    </React.StrictMode>
)
