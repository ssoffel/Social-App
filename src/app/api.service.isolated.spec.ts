 import { ApiService } from './api.service';
 import { Observable, of } from 'rxjs';
 
 describe('ApiService', () => {
    let message;
    const path = 'http://localhost:3000/';
    var mockHttp;
    let apiService: ApiService;

    beforeEach(() => {
         message = 'Hello there';
        
        mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post']);
        apiService = new ApiService(mockHttp)
    })

    describe('getMessages(authorId)', () => {
        it('should call http.get with the correct url', () => {
            mockHttp.get.and.returnValue(of(true));
            apiService.getMessages(3);
            expect(mockHttp.get).toHaveBeenCalledWith(path + 'posts/' + 3)

        })
    })

    describe('postMessage(message)', () => {
        it('should call http.post with the correct url', () => {
            mockHttp.post.and.returnValue(of(true));
            apiService.postMessage(message);
            expect(mockHttp.post).toHaveBeenCalledWith(path + 'post',  message)
        })
    })

    describe('getUsers()', () => {
        it('should call http.het with correct url', () => {
            mockHttp.get.and.returnValue(of(true));
            apiService.getUsers();
            expect(mockHttp.get).toHaveBeenCalledWith(path + 'users');
        })
    })
    
    describe('getProfile(id)', () => {
        it('should be call http.get with the correct url', () => {
            mockHttp.get.and.returnValue(of(true));
            const id = 1234;
            apiService.getProfile(id);
            expect(mockHttp.get).toHaveBeenCalledWith(path + 'profile/' + id);
        })
    })
 })