import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'
import { CALLBACK_URL, REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUTH0_DOMAIN } from './const'
const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)

  root.render(
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN}
      clientId={REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: CALLBACK_URL,
      }}
    >
      <App />
    </Auth0Provider>
  )
} else {
  console.error("Root element with ID 'root' not found.")
}

