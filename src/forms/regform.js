// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Axios from 'axios';
import './regform.css';
// import { stepClasses } from '@mui/material';

export default function   Reg(){
  let formcontrol = async (e)=>{
    console.log("botton clicked");
    e.preventDefault();
    const data = {
                 
      fname,
      lname,
      gender,
      tnearegnum,
      dobb,
      dobwords,
      community,
      caste,
      graduiate,
      resv,
      religion,
      nationality,
      receiptnum,
      receiptdate,
      fathername,
      mothername,
      housenum,
      streetname,
      oorname,
      district,
      presentPincode,
      pmhousenum,
      pmstreetname,
      pmoorname,
      pmdistrict,
      pmpresentPincode,

      nativity,
      statee,
      mothertongue,
      gaurdian,
      occupation,
      familyincome,
      fincomewords,
      smobilenum,
      pmobilenum,
      emailid,
    };
    console.log(fname,lname);

    await Axios.post('http://localhost:3001/reg/postdata',data)
  }
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("");
    
    const [admitdate,setadmitdate]=useState("");
    // const [year,setyear]=useState("");
    // const [dept,setdept]=useState("");
    const [tnearegnum,settnearegnum]=useState("");
    const [receiptnum,setreceiptnum]=useState("");
    const [receiptdate,setreceiptdate]=useState("");
    const [fathername, setfathername] =useState('');
    
    const [mothername, setmothername] =useState('');
    
    
    const [housenum,sethousenum]=useState("");
    const [streetname,setstreetname]=useState("");
    const [oorname,setoorname]=useState("");
    const [district,setdistrict]=useState("");
    const [presentPincode,setpresentpincode]=useState("");

    const [pmhousenum,setpmhousenum]=useState("");
    const [pmstreetname,setpmstreetname]=useState("");
    const [pmoorname,setpmoorname]=useState("");
    const [pmdistrict,setpmdistrict]=useState("");
    const [pmpresentPincode,setpmpresentpincode]=useState("");



    
    const [dobb, setdob] =useState('');
    const [dobwords,setdobwords]=useState("");
    const [nationality, setnationality] =useState('');
    const [mothertongue, setmothertongue] =useState('');
    const [statee, setstate] =useState('');
    const [nativity, setstudiedstate] =useState('');
    const [religion, setreligion] =useState('');
    const [graduiate, setgraduiate] =useState('');
    const [resv, setreservation] =useState('');

    const [caste, setcaste] =useState('');
    const [community, setcommunity] =useState('');
    const [gender, setgender] =useState('');
    const [gaurdian, setgaurdian] =useState('');
    const [occupation, setoccupation] =useState('');
    const [familyincome, setfamilyincome] =useState('');
    const [fincomewords, setfincomewords] =useState('');
    const [smobilenum, setsmobilenum] =useState('');
    const [pmobilenum, setpmobilenum] =useState('');
    const [emailid, setemailid] =useState('');
    
    
    
    return (

        <div className="Regform">
        
        
        <form className="form1" onSubmit={formcontrol} >
        <table>
        <tr>

               <td><label>First-Name:</label></td> 
               <td><TextField id="standard-basic" label="FirstName" variant="standard"
                 value={fname} 
                 required
                 onChange={(e)=>setfname(e.target.value)}

                /></td> </tr>
                
            <br></br>
            

            <tr>
               <td> <label>Last-Name:</label></td>
                <td><TextField id="standard-basic" label="FirstName" variant="standard" 
                value={lname} 
                required
                onChange={(e)=>setlname(e.target.value)} 

                 /></td></tr>
                 <br></br>
                 <tr>  
               
               <td>  Gender:   </td>
                 
              
               <td>    <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            required
            value={gender}
            onChange={(e)=>setgender(e.target.value)}
           
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            
          </Select>
        </FormControl></td></tr>
        <br></br>
            
            
                 <tr>      
       <td>   TNEA Reg No: </td>  
                   <TextField id="standard-number" label="Tnea_reg_Number" type="number" InputLabelProps={{shrink: true, }} variant="standard"
                required
                value={tnearegnum}
                onChange={(e)=>settnearegnum(e.target.value)} />   <br></br>
       </tr>  

                 <br></br>
                 <tr>
                   <td>Date-of-birth:</td>   
                   <td> <input type="date" required
                value={dobb}
                onChange={(e)=>setdob(e.target.value)}></input></td>
                   <td><TextField id="outlined-basic" label="In Words" variant="outlined" required
                value={dobwords}
                onChange={(e)=>setdobwords(e.target.value)} /></td></tr> 
                <br></br>


                 
            
               <tr>
                 <td>  Date_of_joining:   </td>
                 <td> <input type="date" required 
                value={admitdate} 
                onChange={(e)=>setadmitdate(e.target.value)}></input> </td></tr>  <br></br>

        <tr>   
             <td>  Community:   </td>
               
            
             <td>  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Community</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Community"
          required
          value={community}
          onChange={(e)=>setcommunity(e.target.value)}

        >
          <MenuItem value={"bc"}>BC</MenuItem>
          <MenuItem value={"mbc"}>MBC</MenuItem>
          <MenuItem value={"bcm"}>BCM</MenuItem>
          <MenuItem value={"oc"} >OC</MenuItem>
          <MenuItem value={"sc"}>SC</MenuItem>
          <MenuItem value={"sca"}>SCA</MenuItem>
        </Select>
      </FormControl></td></tr>
      
      <br></br>
      <tr>
      <td>First Graduiate:</td>
      <td>  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">First Graduiate</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="FG"
          required
          value={graduiate}
          onChange={(e)=>setgraduiate(e.target.value)}

        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          
        </Select>
      </FormControl></td>


      </tr>
      <br></br>
      <tr>
        <td>
          <label>Special Reservation:</label>
        </td>
        <td>   
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">Reservation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Reservation"
            required
            value={resv}
            onChange={(e)=>setreservation(e.target.value)}
           
          >
            <MenuItem value={"Ex-service_man"}>Ex-service Man</MenuItem>
            <MenuItem value={"service_man"}>service Man</MenuItem>
            <MenuItem value={"sports"}>Sports-Quota</MenuItem>
            <MenuItem value={"7.5_reservation"}>7.5%</MenuItem>
            <MenuItem value={"voc"}>VOC</MenuItem>
            <MenuItem value={"nill"}>NILL</MenuItem>
            
          </Select>
        </FormControl>
        </td>
        
      </tr>




      <br></br>
      <tr>
        <td> <label>Caste:</label></td>   
        <td>   <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Caste</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Community"
          required
          value={caste}
          onChange={(e)=>setcaste(e.target.value)}
        >
          <MenuItem value={"kon"}>Kongu Vellar</MenuItem>
          <MenuItem value={"konn"} >Kongu Vellar</MenuItem>
          <MenuItem value={"kons"}>Kongu Vellar</MenuItem>
          <MenuItem value={"kond"}>Kongu Vellar</MenuItem>
          <MenuItem value={"konsa"}>Kongu Vellar</MenuItem>
          <MenuItem value={"konmn"}>Kongu Vellar</MenuItem>
        </Select>
      </FormControl></td></tr>
      
      
      <br></br>
      <tr>
               <td>    Religion:</td>   
                   
            
               <td>   <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Religion</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Religion"
          required
          value={religion}
          onChange={(e)=>setreligion(e.target.value)}
        >
          <MenuItem value={"Hindu"}>Hindu</MenuItem>
          <MenuItem value={"Muslim"}>Muslim</MenuItem>
          <MenuItem value={"nadar"}>Nadar</MenuItem>
          <MenuItem value={"vanniyar"}>Vanniyar</MenuItem>
          <MenuItem value={"konguvellar"}>Kongu Vellar</MenuItem>
          <MenuItem value={"cristian"}>cristian</MenuItem>
        </Select>
      </FormControl></td></tr> 
      
      
      <br></br>
               
               
               

               <tr> 
                   <td> Nationality:</td>
                   
                   <td><TextField id="standard-basic" label="Nationality" variant="standard"
                required
                value={nationality}
                onChange={(e)=>setnationality(e.target.value)} /></td></tr>  
                 <br></br>

                
       
     
                

               
             
             <br></br>  
        <tr>    <td>   Receipt No:   </td>
                 <td>  <TextField id="standard-number" label="Receipt_number" type="number" InputLabelProps={{shrink: true, }} variant="standard"
                required
                value={receiptnum}
                onChange={(e)=>setreceiptnum(e.target.value)}
                
                 />  </td>
              
                

                
              <td>     <input type="date" required
                value={receiptdate}
                onChange={(e)=>setreceiptdate(e.target.value)}></input>   </td>

          </tr>   <br></br>
          <tr>
           
                  <td> Father-Name:   </td>
                 <td>  <TextField id="standard-basic" label="FatherName" variant="standard" 
                required
                value={fathername}
                onChange={(e)=>setfathername(e.target.value)}
                /> </td></tr>  <br></br>
               
               

               <tr>
                  <td>Mother-Name:   </td>
                <td> <TextField id="standard-basic" label="Mother-Name" variant="standard"
                required
                value={mothername}
                onChange={(e)=>setmothername(e.target.value)} /> </td> </tr>
               
              
<br></br>
               
               
               
                  <tr> 
                  <tr>Present Address:</tr>  
                  <tr><td></td>
                    <td> <TextField id="standard-basic" label="House_Number/Apartment house no" variant="standard"
                required
                value={housenum}
                type="string"
                onChange={(e)=>sethousenum(e.target.value)} /></td>
                  </tr>
                  <tr><td></td>
                    <td> <TextField id="standard-basic" label="Street_Name" variant="standard"
                required
                value={streetname}
                onChange={(e)=>setstreetname(e.target.value)} /></td>
                  </tr>
                  <tr><td></td>
                    <td>
                    <TextField id="standard-basic" label="City/Village name" variant="standard"
                required
                value={oorname}
                onChange={(e)=>setoorname(e.target.value)} />

                    </td>
                  </tr>
                  <tr><td></td>
                    <td>
                    <TextField id="standard-basic" label="District" variant="standard"
                required
                value={district}
                onChange={(e)=>setdistrict(e.target.value)} />

                    </td>
                  </tr>
                  <tr><td></td>
                    <td>
                    <TextField id="standard-basic" label="Pincode" variant="standard"
                required
                type="number"
                value={presentPincode}
                onChange={(e)=>setpresentpincode(e.target.value)} />

                    </td>
                  </tr>
                   
                   </tr><br></br>

                   
                  <tr> 
                  <tr>Permanent Address:</tr>  
                  <tr><td></td>
                    <td> <TextField id="standard-basic" label="House_Number/Apartment house no" variant="standard"
                required
                value={pmhousenum}
                type="number"
                onChange={(e)=>setpmhousenum(e.target.value)} /></td>
                  </tr>
                  <tr><td></td>
                    <td> <TextField id="standard-basic" label="Street_Name" variant="standard"
                required
                value={pmstreetname}
                onChange={(e)=>setpmstreetname(e.target.value)} /></td>
                  </tr>
                  <tr><td></td>
                    <td>
                    <TextField id="standard-basic" label="City/Village name" variant="standard"
                required
                value={pmoorname}
                onChange={(e)=>setpmoorname(e.target.value)} />

                    </td>
                  </tr>
                  <tr><td></td>
                    <td>
                    <TextField id="standard-basic" label="District" variant="standard"
                required
                value={pmdistrict}
                onChange={(e)=>setpmdistrict(e.target.value)} />

                    </td>
                  </tr>
                  <tr><td></td>
                    <td>
                    <TextField id="standard-basic" label="Pincode" variant="standard"
                required
                type="number"
                value={pmpresentPincode}
                onChange={(e)=>setpmpresentpincode(e.target.value)} />

                    </td>
                  </tr>
                   
                   </tr><br></br>
                   
                  
               
                   
                   
                <br></br>
               
               
                  
               
               <tr>
                   <td>Nativity:</td>   
                   
            
                   <td>  <FormControl fullWidth>
                   <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="state"
          required
          value={nativity}
          onChange={(e)=>setstate(e.target.value)}

        >
          <MenuItem value={"TamilNadu"}>TamilNadu</MenuItem>
          <MenuItem value={"Kerala"}>Kerala</MenuItem>
          <MenuItem value={"Maharastra"}>Maharastra</MenuItem>
          <MenuItem value={"Jammu_and_kashmir"} >Jammu and kashmir</MenuItem>
          <MenuItem value={"Delhi"}>Delhi</MenuItem>
          <MenuItem value={"karnataka"}>Karnataka</MenuItem>
        </Select>
      </FormControl></td>
      </tr><br></br>

      <tr>
      <td>State of studied :</td>
                   
                   <td><TextField id="standard-basic" label="state of studied" variant="standard"
                required
                value={statee}
                onChange={(e)=>setstudiedstate(e.target.value)} /></td>

      </tr>
      <br></br>
               
               
               
                  <tr> 
                  <td>  Mother Tongue:</td>
                   
                   <td><TextField id="standard-basic" label="Mother-Tongue" variant="standard"
                required
                value={mothertongue}
                onChange={(e)=>setmothertongue(e.target.value)} /></td></tr>   <br></br>
                        
             
             
      <tr>
                 <td>  Name of the Guardian:  </td> 
                  <td> <TextField id="standard-basic" label="if applicable" variant="standard"
                value={gaurdian}
                onChange={(e)=>setgaurdian(e.target.value)} />   
               </td>
      </tr>
               <br></br>


       <tr>  
               <td>Occupation:   </td>
                  <td> <TextField id="standard-basic" label="Occupation" variant="standard"
                value={occupation}
                onChange={(e)=>setoccupation(e.target.value)} />  
                </td>
              </tr>
              <br></br>
               <tr>
               <td> Family-Income:</td>
               <td> <TextField id="outlined-basic" label="In Rupee" variant="outlined"
                type="number"
                required
                value={familyincome}
                onChange={(e)=>setfamilyincome(e.target.value)}
                    
        /></td>  
        
         
                <td>   <TextField id="outlined-basic" label="In Words" variant="outlined"
                required
                value={fincomewords}
                onChange={(e)=>setfincomewords(e.target.value)} />
               </td> 
      </tr> 
                <br></br>
                <tr>
                <td>  Student Mobile No:</td>   
                 <td>  <TextField id="outlined-basic" label="mobile num" variant="outlined"
                required
                value={smobilenum}
                onChange={(e)=>setsmobilenum(e.target.value)} />  
                </td></tr>
                <br></br>
                

         <tr>
                <td>Parent Mobile No:</td>   
                 <td>  <TextField id="outlined-basic" label="Mobile-No" variant="outlined"
                required
                value={pmobilenum}
                onChange={(e)=>setpmobilenum(e.target.value)} />  
                </td>
        </tr>
                <br></br>
               


               
            
               <tr>
                <td>   Email-address:</td>   
                 <td>  <TextField id="outlined-basic" label="email-id" variant="outlined"
                required
                value={emailid}
                onChange={(e)=>setemailid(e.target.value)} />  
                </td></tr>
                <br></br>
                <tr>
               <button className='regbutton'>Submit</button>
                </tr>

        
        {/* <Button variant="contained" className='regbutton' >Submit</Button> */}
        </table>


        </form>
        
        </div>
        
    );
}
