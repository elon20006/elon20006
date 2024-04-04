import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique: true,
    },
    email: {
        type : String,  
        required : true,    
        unique: true,
    },
    password: { 
        type: String,
        required : true,
    },
    profilePicture: {
        type: String,
        default: "https://www.bing.com/images/search?view=detailV2&ccid=tgmmCh4S&id=ED6A6FA6223CB51870AAC411CD30D8AF96E64259&thid=OIP.tgmmCh4SA36j0dMT0ay9!_AHaHa&mediaurl=https%3A%2F%2Ffilestore.community.support.microsoft.com%2Fapi%2Fimages%2F0ce956b2-9787-4756-a580-299568810730%3Fupload%3Dtrue&exph=1080&expw=1080&q=Default+User+Profile&simid=608002619150317790&form=IRPRST&ck=91F2B08E2C2A507DC52697D9C1458CDE&selectedindex=1&itb=1&ajaxhist=0&ajaxserp=0&vt=0&sim=11"
    },
    isAdmin: {
        type: Boolean,
        default: false,
      },


    
},
 {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;