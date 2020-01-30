const operations=require('../../utils/operations')

// Gets the shorter version of the long URL posted
const postHandler=async(req,h)=>{
  try{
    const longURL=req.payload.url;
    const res=await operations.shortenURL(longURL); 
    return h.response(res).code(200);
  }catch(err){
    h.response(err.message).code(500);
  } 
}


// Redirects to a particular URL
const getHandler=async(req,h)=>{
  try{
    const res=await operations.redirect(req.payload.url);
   await h.redirect(res).temporary();
    return await h.response(`Redirected to ${res}`).code(200);
  }catch(err){
    console.log(err.message);
    return h.response(err.message).code(500);
  }
}

module.exports={getHandler,postHandler}