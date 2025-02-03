import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'
import DashboardPage from './routes/dashboard/DashboardPage.jsx'
import ChatPage from './routes/chat/ChatPage.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          { 
            path: '/dashboard',
            element: <DashboardPage />,
          },
          {
            path: '/dashboard/chats/:id',
            element: <ChatPage />,
          },
        ],
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
