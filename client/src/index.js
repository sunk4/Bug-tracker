import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import App from './App'
import { AppProvider } from './context/appContext'
import { AuthProvider } from './context/authContext'
import { UsersProvider } from './context/usersContext'
import { ProjectProvider } from './context/projectContext'
import { TicketsProvider } from './context/ticketsContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <AuthProvider>
        <UsersProvider>
          <ProjectProvider>
            <TicketsProvider>
              <App />
            </TicketsProvider>
          </ProjectProvider>
        </UsersProvider>
      </AuthProvider>
    </AppProvider>
  </React.StrictMode>
)
