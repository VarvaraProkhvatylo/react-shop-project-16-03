import React from 'react'
import ReactDOM from 'react-dom/client'

type HeaderProps = {
    leftPart: string //обов'язкове
    text?: string //необов'язкове
    rightPart?: string
    order?: number
}

const Header = (props: HeaderProps) => {
    console.log(props)
    return (
        <h1>
            {props.order} {props.leftPart} {props.text} {props.rightPart}
        </h1>
    )
}

/// Component via Function Declaration

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
    <React.Fragment>
        <p>
            1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            et quam vel aut nemo fuga. Exercitationem sit dolores minus nisi
            repellat beatae odit eligendi repellendus iste, dolorum soluta
            ducimus eos.
        </p>
        <p>
            2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            et quam vel aut nemo fuga. Exercitationem sit dolores minus nisi
            repellat beatae odit eligendi repellendus iste, dolorum soluta
            ducimus eos.
        </p>
    </React.Fragment>
)

const App = () => {
    return (
        <>
            <Header
                order={1}
                leftPart="Hello"
                text="Title"
                rightPart="Component"
            />
            <Header order={2} leftPart="Bye-bye" text="App" />
            <Header leftPart="Hi" />
            <Content />
            <Content1 />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
        {/* <Title />
        <Content />
        <Content1 /> */}
    </React.StrictMode>
)
