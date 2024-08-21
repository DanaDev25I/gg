import { Outlet } from 'react-router-dom';
import Navbar from '../Maincom/Navbar'; // Ensure the import path matches your file structure

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
