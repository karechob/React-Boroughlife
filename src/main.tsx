import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import EventsPage from './pages/EventsPage.tsx'
import CalendarPage from './pages/CalendarPage.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MagazinePage from './pages/MagazinePage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "events",
    element: <EventsPage />,
  },
  {
    path: "calendar",
    element: <CalendarPage />,
  },
  {
    path: "magazine",
    element: <MagazinePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
