const operations=require('../../utils/operations')

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
    const res=await operations.redirect(req.payload.url);
    h.redirect(res).temporary();
    return await h.response(`Redirected to ${res}`).code(200);
  }catch(err){
    return h.response(err.message).code(500);
  }
}

module.exports=getHandler

