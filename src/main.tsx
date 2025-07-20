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
import SignUp from './pages/SignUp.tsx';
import Editor from './pages/Editor.tsx';
import { FileProvider } from './contexts/FileContext.tsx';
const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/editor' element={<Editor />} />
    </>
  )
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FileProvider>
      <RouterProvider router={router} />
    </FileProvider>
  </StrictMode>
);
