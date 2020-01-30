const shortid = require('shortid');
const sequelize=require('../src/connection')

// Shorten the long URL
const shortenURL=async(newLongURL)=>{
    const shortenedURL=shortid.generate();
    await sequelize.query(`INSERT INTO urlshortener (longURL,shortURL) VALUES (:longURL,:shortURL)`,{
        replacements:{
            longURL:newLongURL,
            shortURL:shortenedURL
        },
        type: sequelize.QueryTypes.INSERT
    })
    return shortenedURL;
}

// Redirect to another page for 30 mins
const redirect=async(newShortURL)=>{
    const longURL= await sequelize.query(`SELECT longURL FROM urlshortener WHERE urlshortener.shortURL='${newShortURL}';`,
    {type: sequelize.QueryTypes.SELECT});
    return longURL;
}

module.exports={redirect,shortenURL};


