import React from 'react'
import ReactDOM from 'react-dom/client'
import { StringMappingType } from 'typescript'
import Header from './Header'
import Content from './Content'

const App = () => {
    return (
        <>
            <Header
                order={1} // все, крім рядка, пишеться через {}
                leftPart="Hello"
                text="Title"
                rightPart="Component"
            />
            <Header order={2} leftPart="Bye-bye" text="App" />
            <Header leftPart="Hi" />
            <Content title="Header 1 Props" text1="paragraph" />
            <Content
                title="Header 2 Props"
                text1="paragraph 1"
                text2="textxwgcdcdh jefejf"
            />
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

const user = {
    name: 'Jack',
    age: 10,
}

const { name, age } = user
console.log(name, age)
