
import './login.css';
import gctpic from '../images/gctpic.jpg';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


export default function Login(){
    return (<div className='main'>
        <img src={gctpic} alt="gct" ></img>
      
        <div className='one'>
        <form>
    
            <table className='logintable'>
            <h2 >Login Details</h2><br></br>
                <tr>
                    <td>UserName:<TextField id="outlined-basic" color='error' label="Username" className='tfield' variant="outlined"/></td>
                    
                </tr><br></br>
                <tr>
                    <td>Password: <TextField id="outlined-basic" color='error' label="Password" className='tfield' variant="outlined"/></td>
                    
                </tr>
            </table><br></br>
            <Link to="/reg" > <Button variant="contained" color="success">Login</Button></Link>
        
            
        </form>

        </div>

        </div>
    );
}