import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './styles/index.scss'
import MainPage from '@/MainPage/MainPage'
import { Spinner } from 'react-bootstrap'

const FrontPage = React.lazy(() => import('@/FrontPage/FrontPage.jsx'))
const EventsPage = React.lazy(() => import('@/EventsPage/EventsPage'))
const EventDetailsPage = React.lazy(() => import('@/EventDetailsPage/EventDetailsPage'))
const ArtistDetailsPage = React.lazy(() => import('@/ArtistDetailsPage/ArtistDetailsPage'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/events/search",
    element: <MainPage />,
    children: [
      {
        index: true, element: <EventsPage />
      }
    ]
  },
  {
    path: "/event/:eventId",
    element: <MainPage />,
    children: [
      {
        index: true, element: <EventDetailsPage />,
      }
    ]
  },
  {
    path: "/artist/:artistId",
    element: <MainPage />,
    children: [
      {
        index: true, element: <ArtistDetailsPage />,
      }
    ]
  },
], { basename: "/skiddle" })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense 
      fallback={
        <div className="text-center py-5">
            <Spinner animation="border" variant="secondary" />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
