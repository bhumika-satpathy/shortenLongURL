const createServer = require('../../src/server');
const db = require('../../models/index');

describe('The server ', () => {
	let server;

	beforeEach(async () => {
		server = await createServer();
		await server.initialize();
		return server;
	});

	afterEach(async () => {
		await server.stop();
	});

	it('Should return right code when called correctly', async () =>{
		const injectOptions = {
			method: 'GET',
			url: '/CCSUCaP2',
		};
		const mockDataBase = jest.spyOn(db.URLroutes, 'findOne');
		mockDataBase.mockResolvedValue({dataValues: {url:'www.google.com'}});
		const res = await server.inject(injectOptions);
		
		expect(res.statusCode).toEqual(302);
  });
  
	it('should return 500 when the database operation fails', async () =>{
		const injectOptions = {
			method: 'GET',
			url: '/CCSUCaP2',
		};
		const mockDataBase = jest.spyOn(db.URLroutes, 'findOne');
		mockDataBase.mockRejectedValue(new Error('Error'));
		const res = await server.inject(injectOptions);
		
		expect(res.statusCode).toEqual(500);
  });
  
	it('should return correct status code when i.e, 200 whenever a right url is passed', async () =>{
		const injectOptions = {
			method: 'POST',
			url: '/longURLs',
			payload: {
				url: 'www.instagram.com',
			},
		};
		const mockDataBase = jest.spyOn(db.URLroutes, 'create');
		mockDataBase.mockResolvedValue(true);
		const res = await server.inject(injectOptions);
		expect(res.statusCode).toEqual(200);
  });
  
	it('should return the correct status code of 500 whenever the database operation fails', async () =>{
		const injectOptions = {
			method: 'POST',
			url: '/longURLs',
			payload: {
				url: 'www.instagram.com',
			},
    };
    
		const mockDataBase = jest.spyOn(db.URLroutes, 'create');
		mockDataBase.mockRejectedValue(new Error('Error'));
		const res = await server.inject(injectOptions);
		expect(res.statusCode).toEqual(500);
    
	});
});