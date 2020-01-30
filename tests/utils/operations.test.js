const {redirect,shortenedURL}=require('../../src/utils/operations');
const sequelize=require('../../src/connection.js');
describe('The redirect function ',()=>{
    it('should ',async()=>{
        const mockSequelize=jest.spyOn(sequelize,'query');
        mockSequelize.mockResolvedValue('{shortURL:"www.google.com"}');
        const res=await redirect('https://akhromieiev.com');
        expect(res).toEqual('{shortURL:"www.google.com"}');
        expect(mockSequelize).toHaveBeenCalled();
    })
})

