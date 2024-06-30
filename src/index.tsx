import React from 'react'
import ReactDOM from 'react-dom/client'

//create react element without jsx
const h1 = React.createElement('h1', { id: 'title' }, 'Hello app')
const p = React.createElement('p', null, 'Blablabla blabla blablabla')

/// create react element with jsx

const ul = (
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
)

const app = (
    <div>
        {h1}
        {p}
        {ul}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
