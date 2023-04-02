const { default: axios } = require("axios");
const router=require("express").Router();
const query=require('./Queries/contestInfo.js')
const Promises = require('bluebird');

//Changes Required
const codeforeces_URL_1='https://codeforces.com/api/user.rating?handle=ayushman_sinha';
const codeforeces_URL_2='https://codeforces.com/api/user.info?handles=ayushman_sinha';
try{
    router.get('/',async(req,res)=>{
        const response = await axios.get(query)       
        await res.send(response.data);
    });
    router.get('/codeforces',async(req,res)=>{
        const response = await axios.get(codeforeces_URL_1);
        const response2 = await axios.get(codeforeces_URL_2);
        const data = await Promises.all([response.data,response2.data]);
        //Add both the responses in a single object and send it
        await res.send(data);
    })
}
catch(err){
    console.log(err);
}
     

module.exports=router;