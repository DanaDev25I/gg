import { Outlet } from 'react-router-dom';

import Navbar from '../Google component/navbar';

const mainlayout =()=>{


    return (
        <>
          <Navbar />
            <Outlet />
            
        </> 
    )
}
export default mainlayout;