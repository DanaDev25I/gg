import { Outlet } from 'react-router-dom';

import Navbar from '../Maincom/navbar';

const mainlayout =()=>{


    return (
        <>
          <Navbar />
            <Outlet />
            
        </> 
    )
}
export default mainlayout;