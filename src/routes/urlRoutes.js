const {getHandler,postHandler}=require('../handlers/shortenURL')

const routesArr = [
    { method: 'POST', path: '/longURLs', handler: postHandler, },
    { method: 'GET', path: '/{url}', handler:getHandler }
]

module.exports=routesArr;