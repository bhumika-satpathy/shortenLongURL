const {redirect,shortURL}=require('../utils/operations')

// Gets the shorter version of the long URL posted
// const postHandler=async(req,h)=>{
//   try{
//     const longURL=req.payload;
//     const res=await toShortURL(longURL); 
//     h.response(res);
//   }catch(err){
//     h.response(err.message);
//   } 


// Redirects to a particular URL
const getHandler=async(req,h)=>{
  try{
    const res=redirect(req.payload);
    await h.redirect(res).temporary();
    return h.response(`Redirected to ${res}`).code(200);
  }catch(err){
    return h.response(err.message).code(500);
  }
}

module.exports=getHandler

/*
let request = require("request");
let linkRequest = {
  destination: "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g",
  domain: { fullName: "rebrand.ly" }
  //, slashtag: "A_NEW_SLASHTAG"
  //, title: "Rebrandly YouTube channel"
}

let requestHeaders = {
  "Content-Type": "application/json",
  "apikey": "YOUR_API_KEY",
  "workspace": "YOUR_WORKSPACE_ID"
}

request({
    uri: "https://api.rebrandly.com/v1/links",
    method: "POST",
    body: JSON.stringify(linkRequest),
    headers: requestHeaders
}, (err, response, body) => {
  let link = JSON.parse(body);
  console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
})
*/