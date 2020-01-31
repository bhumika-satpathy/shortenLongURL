const {redirect,shortenURL}=require('../../src/utils/operations');
const sequelize=require('../../src/connection.js');
describe('The redirect function ',()=>{
    it('should return the long URL to which the short URL redirects',async()=>{
        const mockSequelize=jest.spyOn(sequelize,'query');
        mockSequelize.mockResolvedValue('www.google.com');
        const res=await redirect('https://akhromieiev.com');
        expect(res).toEqual("www.google.com");
        expect(mockSequelize).toHaveBeenCalled();
    })
})

describe('The shortenURL function ',()=>{
    it('should insert short form of the long url',async()=>{
        const mockSequelize=jest.spyOn(sequelize,'query');
        mockSequelize.mockResolvedValue();
        await shortenURL('http://thelongestlistofthelongeststuffatthelongestdomainnameatlonglast.com/wearejustdoingthistobestupidnowsincethiscangoonforeverandeverandeverbutitstilllookskindaneatinthebrowsereventhoughitsabigwasteoftimeandenergyandhasnorealpointbutwehadtodoitanyways.html');
        expect(mockSequelize).toHaveBeenCalled();
    })
})




