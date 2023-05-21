import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './styles/index.scss'
import MainPage from '@/MainPage/MainPage'
import Loading from '@/Loading/Loading'

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
], { basename: import.meta.env.VITE_ROUTER_BASE })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
