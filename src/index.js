import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import MyBookingsPage from './pages/MyBookings/MyBookings';
import {SnackbarProvider} from 'notistack';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/mybookings',
        element: <MyBookingsPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <RouterProvider router={routes} />
    </SnackbarProvider>
  </React.StrictMode>
);
