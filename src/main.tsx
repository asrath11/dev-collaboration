import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromChildren,
  Route,
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import SignIn from './pages/SignIn.tsx';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
    </>
  )
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
