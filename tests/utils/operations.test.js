const {redirecting,shortenURL}=require('../../src/utils/operations');
const db  = require('../../models/index');
describe('The redirect function ',()=>{
    it('should return the long URL to which the short URL redirects',async()=>{
        const mockTable=jest.spyOn(db.URLroutes,'findOne');
        mockTable.mockResolvedValue('{dataValues:{longURL:www.google.com}}');
        const res=await redirecting('xyz');
        expect(res).toEqual('{dataValues:{longURL:www.google.com}}');
        expect(mockTable).toHaveBeenCalled();
    })
})

describe('The shortenURL function ',()=>{
    it('should insert short form of the long url',async()=>{
        const mockTable=jest.spyOn(db.URLroutes,'create');
        mockTable.mockResolvedValue();
        await shortenURL('www.google.com');
        expect(mockTable).toHaveBeenCalled();
    })
})

