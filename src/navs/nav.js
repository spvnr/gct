import {Outlet, Link} from 'react-router-dom';
import './nav.css';
import Header from "../header/header";

export default function Navs(){
    return (
        <div>
        <Header/>
        <div >
        <ul className='navbar'>
                <li><Link to="/reg" className='lll'>REGISTER</Link></li>
                <li><Link to="/one" className='lll'>TC GEN</Link></li>
                <li><Link to="/two" className='lll'>ADMIN USE</Link></li>
        </ul>
        <Outlet/>
        

        </div>

            
        </div>
    );
}