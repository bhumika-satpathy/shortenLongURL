const operations=require('../utils/operations')

// Gets the shorter version of the long URL posted
const postHandler=async(req,h)=>{
  try{
    const longURL=req.payload.url;
    console.log(longURL);
    const res=await operations.shortenURL(longURL); 
    console.log(res);
    return h.response(res).code(200);
  }catch(err){
    return h.response(err.message).code(500);
  } 
}


// Redirects to a particular URL
const getHandler=async(req,h)=>{
  try{
    const res=await operations.redirecting(req.params.url);
    //console.log(res);
    return h.redirect(res);
    // return await h.response(`Redirected to ${res}`).code(200);
  }catch(err){
    console.log(err.message);
    return h.response(err.message).code(500);
  }
}

module.exports={getHandler,postHandler}