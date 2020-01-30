const sequelize=require('../../src/connection')

const shortURL=()=>{
    //Shorten the long URL
}

// Redirect to another page for 30 mins
const redirect=async(longURL)=>{
    const shortURL=await sequelize.query(`SELECT shortURL from urlshortener where urlshortener.longURL=${longURL}`,
    {type: sequelize.QueryTypes.SELECT});
    return shortURL;
}

module.exports={redirect,shortURL};


