import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import { AppRouter } from './app/router/router'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppRouter />
	</StrictMode>
)
