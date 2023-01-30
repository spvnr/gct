const mongoose = require("mongoose")

const gctschema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    tnearegnum:{
        type:Number,
        required:true
    },
    dobb:{
        type:String,
        required:true
    },
    dobwords:{
        type:String,
        required:true
    }, 
    community:{
        type:String,
        required:true
    }, 
    caste:{
        type:String,
        required:true
    },
    First_graduiate:{
        type:String,
        required:true
    },
    reservation:{
        type:String,
        required:true
    },

    religion:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    }, 

    receiptnum:{
        type:Number,
        required:true
    },
    receiptdate:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    mothername:{
        type:String,
        required:true
    },
    presentaddress:{
        housenum:{
            type:String,
            required:true

        },
        streetname:{
            type:String,
            required:true
        },
        villagename:{
            type:String,
            required:true
        },
        district:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        },

    },
    permanentaddress:{
        phousenum:{
            type:String,
            required:true

        },
        pstreetname:{
            type:String,
            required:true
        },
        pvillagename:{
            type:String,
            required:true
        },
        pdistrict:{
            type:String,
            required:true
        },
        ppincode:{
            type:Number,
            required:true
        },

    },
    nativity:{
        type:String,
        required:true

    },
     
    statee:{
        type:String,
        required:true
    },
     mothertongue:{
        type:String,
        required:true
    },
    
    gaurdian:{
        type:String,
    },
    occupation:{
        type:String,
        required:true
    },
    
    familyincome:{
        type:Number,
        required:true
    },
    fincomewords:{
        type:String,
        required:true
    },
    stdnumber:{
        type:Number,
        required:true
    },
    parentnumber:{
        type:Number,
        required:true
    },






    // admitdate:{
    //     type:String,
    //     required:true
    // },
    // year:{
    //     type:String,
    //     required:true
    // },
    // dept:{
    //     type:String,
    //     required:true
    // },
    
   
    
    
    
   
      
     
       
   
     
      
     
    emailid:{
        type:String,
        required:true,
        
    }  
});

const gctschemaa = mongoose.model("gctstd",gctschema);
module.exports = gctschemaa;

        