import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './MainLayout/layout';
import Results from './Google component/result';
import Err from './Maincom/Err';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Results />} />
        <Route path="search" element={<Results />} />
        <Route path="images" element={<Results />} />
        <Route path="news" element={<Results />} />
        <Route path="videos" element={<Results />} />
        <Route path="*" element={<Err />} />
      </Route>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
