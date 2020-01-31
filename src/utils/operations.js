const db = require('../../models/index');
const shortid = require('shortid');
// const sequelize=require('../connection')

// Shorten the long URL
const shortenURL=async(longURL)=>{
    const shortenedURL=shortid.generate();
    const creationTimeOfShortID=Date.now();
    await db.URLroutes.create({id:shortenedURL,longURL:longURL,time:creationTimeOfShortID});

    return shortenedURL;
}

// Redirect to another page for 30 mins

const redirecting=async(shortURL)=>{
    const res=await db.URLroutes.findOne({
        where:{
            id:shortURL
        }
    })
    //console.log(res);
    if(res===null)return [];
    
    // console.log(x);
    if(Date.now()-res.time<=1800000){
        return res.dataValues.longURL;
    }

    else return [];
}


module.exports={redirecting,shortenURL};


