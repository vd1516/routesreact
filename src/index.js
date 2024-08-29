import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import About from './pages/about';
import Course from './pages/course';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './pages/blog';
import BlogInfo from './pages/bloginfo';
import NotFound from './pages/notfound';
import Clothes from './pages/clothes';
import ClothesInfo from './pages/clothesinfo';
import Form from './pages/form';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

const root = ReactDOM.createRoot(document.getElementById('root'));
const allRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about-us',
    element:<About/>
  },
  {
    path:'/courses',
    element:<Course/>
  },
  {
    path:'/blog',
    element:<Blog/>
  },
  {
    path:'/blog/:id',
    element:<BlogInfo/>
  },
  {
    path:'/clothes',
    element:<Clothes/>
  },
  {
    path:'/clothes/:id',
    element:<ClothesInfo/>
  },
  {
    path:'/*',
    element:<NotFound/>
  },
  {
    path:'/form',
    element:<Form/>
  }
])

root.render(
  <React.StrictMode>
      <RouterProvider router={allRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
