const {getHandler,postHandler}=require('../../src/handlers/shortenURL');
const operations=require('../../src/utils/operations');


describe('The getHandler function ',()=>{
    it('should return a status code of 200 when successful',async()=>{
        const mockRedirect=jest.spyOn(operations,'redirecting');
        const mockReq={
            params:{
                url:'xyz' 
            }
        }

        const mockCode=jest.fn();
        const mockH={
            redirect:jest.fn(()=>{
                return {code:mockCode}
            })
        }

        //mockRedirect.mockResolvedValue('www.google.com');
        await getHandler(mockReq,mockH);
        expect(mockRedirect).toHaveBeenCalled();
        expect(mockCode).toHaveBeenCalledWith(302);
        expect(mockH.redirect).toHaveBeenCalled();
        mockRedirect.mockRestore();
      
    })

    it('should throw an error of status code 500 when it encounters a file error',async()=>{
       
        const mockReq={
            params:{
                url:'https://akhromieiev.com' 
            }
        }

        const mockCode=jest.fn();
        const mockH={
            response:jest.fn(()=>{
                return {code:mockCode}
            }),
        }

        const mockRedirect=jest.spyOn(operations,'redirecting');
        mockRedirect.mockRejectedValue(new Error('File Error encountered!'));
        await getHandler(mockReq,mockH);
        expect(mockCode).toHaveBeenCalledWith(500);
        expect(mockH.response).toHaveBeenCalledWith('File Error encountered!')
        
    })

})


describe('The post handler function',()=>{
    it('should return a resp',async()=>{
        const mockShortenURL=jest.spyOn(operations,'shortenURL');
        mockShortenURL.mockResolvedValue('www.xyz.com');

        const mockReq={
            payload:{
                url:'http://thelongestlistofthelongeststuffatthelongestdomainnameatlonglast.com/wearejustdoingthistobestupidnowsincethiscangoonforeverandeverandeverbutitstilllookskindaneatinthebrowsereventhoughitsabigwasteoftimeandenergyandhasnorealpointbutwehadtodoitanyways.html'
            }
        }

        const mockCode=jest.fn();
        const mockH={
            response:jest.fn(()=>{
                return {code:mockCode}
            })
        }
        await postHandler(mockReq,mockH);
        expect(mockH.response).toHaveBeenCalledWith('www.xyz.com');
        expect(mockCode).toHaveBeenCalledWith(200);
        mockShortenURL.mockRestore();
        // mockReq.mockRestore();
    })

    it('should throw an error of status code 500 when file error is encountered',async()=>{
        const mockReq={
            payload:{
                url:'http://thelongestlistofthelongeststuffatthelongestdomainnameatlonglast.com/wearejustdoingthistobestupidnowsincethiscangoonforeverandeverandeverbutitstilllookskindaneatinthebrowsereventhoughitsabigwasteoftimeandenergyandhasnorealpointbutwehadtodoitanyways.html'
            }
        }

        const mockCode=jest.fn();
        const mockH={
            response:jest.fn(()=>{
                return {code:mockCode}
            })
        }

        const mockShortenURL=jest.spyOn(operations,'shortenURL');
        mockShortenURL.mockRejectedValue(new Error('File error encountered!'));

        await postHandler(mockReq,mockH);
        expect(mockH.response).toHaveBeenCalledWith('File error encountered!');
        expect(mockCode).toHaveBeenCalledWith(500);

        mockShortenURL.mockRestore();
    })
})