import './App.css'
import Layout from './Layout';
import Homepage from './pages/Homepage';
import Errorpage from './pages/Errorpage';
import Reserve from './pages/Reserve';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Homepage/>
      }, {
        path: '/reserve',
        element: <Reserve />
      }
    ]
  },
]

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App