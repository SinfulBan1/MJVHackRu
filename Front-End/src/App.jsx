import './App.css'
import Layout from './Layout';
import Homepage from './pages/Homepage';
import Errorpage from './pages/Errorpage';
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
      }
    ]
  },
]

const router = createBrowserRouter(routes);
function App() {
  console.log('App mounted — router:', !!router);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App