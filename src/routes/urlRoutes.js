const {postHandler,getHandler}=require('')
//const postSchema=require('../schema/getPost');

const routesArr = [
    { method: 'POST', path: '/urls', handler: postHandler, },
    { method: 'GET', path: '/urls', handler:getHandler }
]

module.exports=routesArr;