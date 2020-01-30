const {redirect,shortenedURL}=require('../../utils/operations');
const sequelize=require('../../src/connection.js');
describe('The redirect function ',()=>{
    it('should ',async()=>{
        const mockSequelize=jest.spyOn(sequelize,'query');
        mockSequelize.mockResolvedValue('www.google.com');
        const res=await redirect('https://akhromieiev.com');
        expect(res).toEqual("www.google.com");
        expect(mockSequelize).toHaveBeenCalled();
    })
})

