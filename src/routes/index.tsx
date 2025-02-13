import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const HotelsPage = lazy(() => import('../pages/HotelsList'));
const HotelDetailPage = lazy(() => import('../pages/HotelDetail'));
const LocationPage = lazy(() => import('../pages/Location'));

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/hotels',
    element: <HotelsPage />,
  },
  {
    path: '/hotels/:id',
    element: <HotelDetailPage />,
  },
  {
    path: '/hotels/map',
    element: <LocationPage />,
  },
];
const AppRouter = () => {
  const router = createBrowserRouter(routes);
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
