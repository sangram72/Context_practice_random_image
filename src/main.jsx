import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextColor } from './Components/Context'
createRoot(document.getElementById('root')).render(
<ContextColor>
    <App />
    </ContextColor>

)
