const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const gct = require('./models/gctschema.js')

const app=express()

app.use(express.json())
app.use(cors({origin:true,credentials:true}));
app.use(express.urlencoded({limit:'25mb'}));

const MURL="mongodb+srv://prabhu:prabhu@mernstack.mqhzzq6.mongodb.net/Bookstore";
const PORT=3001;
const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
};
mongoose.connect(MURL,connectionparams)
    .then(()=>
        {
            console.log("db connected")
        })
    .catch((err)=>{
        console.log(err)
    })
app.listen(PORT,()=>{
    console.log("port connected")
})

app.get('/getdata',async(req,res)=>{
        var data=await gct.find()
        res.status(200).send(data)

});

app.post('/reg/postdata',(req,res)=>{
    let {
        fname,
        lname,
        gender,
        tnearegnum,
        dobb,
        dobwords,
        community,
        caste,
        fs,
        reservation,
        religion,
        nationality,
        receiptnum,
        receiptdate,
        fathername,
        mothername,
        housenum,
        streetname,
        villagename,
        district,
        pincode,
        pphousenum,
        pstreetname,
        pvillagename,
        pdistrict,
        ppincode,
        nativity,
        statee,
        mothertongue,
        gaurdian,
        occupation,
        familyincome,
        fincomewords,
        stdnumber,
        parentnumber,
        emailid,
    }=req.body;

const newdata= new gct({
    fname,
    lname,
    gender,
    tnearegnum,
    dobb,
    dobwords,
    community,
    caste,
    fs,
    reservation,
    religion,
    nationality,
    receiptnum,
    receiptdate,
    fathername,
    mothername,
    housenum,
    streetname,
    district,
    pincode,
    pphousenum,
    pstreetname,
    pvillagename,
    pdistrict,
    ppincode,
    nativity,
    statee,
    mothertongue,
    gaurdian,
    occupation,
    familyincome,
    fincomewords,
    stdnumber,
    parentnumber,
    emailid,
    });
    console.log("post called");

    const newentry=newdata.save();
    res.json(newentry);



});

app.delete('/deletedata/:id',async (req,res)=>{
    const mid=req.params.id;
    const deleteddata = await gct.findByIdAndDelete(mid);
    // return res.status(200).send();
    try
    {
        if(!mid)
        {
        return res.status(400).send();
        }
        res.send(deleteddata);
    }
    catch(e)
    {
        return res.status(500).send(e);
    }

})

app.patch('/updatedata/:id',async(req,res)=>{
    const updatedatas=await gct.findByIdAndUpdate(req.params.id,req.body,{new:true});
    try{
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(updatedatas);
    }
    catch(e)
    {
        return res.status(500).send(e);
    }

})


app.put('/updatealldata',async(req,res)=>{
    let {
        fname,
        lname,
        gender,
        tnearegnum,
        dobb,
        dobwords,
        community,
        caste,
        fs,
        reservation,
        religion,
        nationality,
        receiptnum,
        receiptdate,
        fathername,
        mothername,
        housenum,
        streetname,
        district,
        pincode,
        phousenum,
        pstreetname,
        pdistrict,
        ppincode,
        nativity,
        statee,
        mothertongue,
        gaurdian,
        occupation,
        familyincome,
        fincomewords,
        stdnumber,
        parentnumber,
        emailid,

    }=req.body;
    const updatedatas=await gct.updateMany({$set:fname = req.body});
    try{
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(updatedatas);
    }
    catch(e)
    {
        return res.status(500).send(e);
    }

})

