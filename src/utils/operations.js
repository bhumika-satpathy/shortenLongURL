const shortid = require('shortid');
const sequelize=require('../../src/connection')

//Shorten the long URL
const shortenedURL=async(address)=>{
    address.shortURL=shortid();
    await sequelize.query('INSERT INTO urlshortener(longURL,shortURL) VALUES (:longURL,:shortURL)',{
        replacements:{
            longURL:address.longURL,
            shortURL:address.shortURL,
        },
        type: sequelize.QueryTypes.INSERT
    })
}

// Redirect to another page for 30 mins
const redirect=async(longURL)=>{
    const shortURL=await sequelize.query(`SELECT shortURL from urlshortener where urlshortener.longURL=${longURL}`,
    {type: sequelize.QueryTypes.SELECT});
    return shortURL;
}

module.exports={redirect,shortenedURL};


