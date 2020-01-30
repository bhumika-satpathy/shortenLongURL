const shortid = require('shortid');
const sequelize=require('../src/connection')

//Shorten the long URL
const shortenedURL=async(address)=>{
    address.shortURL=shortid.generate();
    await sequelize.query(`INSERT INTO urlshortener (longURL,shortURL) VALUES (:longURL,:shortURL)`,{
        replacements:{
            longURL:address.longURL,
            shortURL:address.shortURL,
        },
        type: sequelize.QueryTypes.INSERT
    })
}

// Redirect to another page for 30 mins
const redirect=async(changelongURL)=>{
    const newURL= await sequelize.query(`SELECT shortURL FROM urlshortener WHERE urlshortener.longURL='${changelongURL}';`,
    {type: sequelize.QueryTypes.SELECT});
    return newURL;
}

module.exports={redirect,shortenedURL};


