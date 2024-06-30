import React from 'react'
import ReactDOM from 'react-dom/client'

//create react element
const h1 = React.createElement('h1', { id: 'title' }, 'Hello app')
const p = React.createElement('p', null, 'Blablabla blabla blablabla')

const app = (
    <div>
        {h1}
        {p}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
