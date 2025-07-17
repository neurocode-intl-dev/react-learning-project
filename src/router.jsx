import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';
import PostsComponent from './pages/PostComponent.jsx';
import SampleApi from './pages/SampleApi.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "profile/:username", element: <Profile /> },
    ],
  },
  {
    path: "/api",
    errorElement: <NotFound />,
    
    children: [
      { index: true, element: <SampleApi/>},
      {path : "post", element: <PostsComponent />},
     
    ],
  },
]);

export default router;
