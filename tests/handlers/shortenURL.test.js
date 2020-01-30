const getHandler=require('../../src/handlers/shortenURL');
const operations=require('../../utils/operations');


describe('The getHandler function ',()=>{
    it('should return a status code of 200 when successful',async(done)=>{
        const mockRedirect=jest.spyOn(operations,'redirect');
        const mockReq={
            payload:{
                shortenURL:'https://akhromieiev.com' 
            }
        }

        const mockCode=jest.fn();
        const mockH={
            response:()=>{
                return {code:mockCode}
            }
        }
        mockRedirect.mockResolvedValue(`www.google.com`);
        await getHandler(mockReq,mockH);
        expect(mockRedirect).toHaveBeenCalled();
        expect(mockCode).toHaveBeenCalledWith(200);
        expect(mockH.response).toHaveBeenCalledWith(`Redirected to www.google.com`);
        mockRedirect.mockRestore();
        done();
    })
})