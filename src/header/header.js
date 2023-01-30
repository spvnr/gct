import gctlogo from '../images/gctlogo.png';
import './header.css';

export default function Headers(){
    return(
        <div className='loginhead'>
        <img src={gctlogo} alt='gct Logo'></img>
        <h1 className='loginheader'>Government College of technology , <br></br> Coimbatore -13 .</h1>
    
    </div>
        
    );
}