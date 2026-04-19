import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import {TrackingMonitor} from '../features/tracking/components/TrackingMonitor';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <TrackingMonitor />
      </MainLayout>
    ),
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;