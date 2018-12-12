import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
 import { HttpCachService } from './http-cach.service';


@Injectable()

export class HttpCacheInterceptor implements HttpInterceptor {

    constructor(private cacheService: HttpCachService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //pass along non-cacheable request

        if (req.method !== 'GET') {
            console.log(`Invalidating cache: ${req.method} ${req.url}`);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }

        //attempt to retrieve a cached response
        const response: HttpResponse<any> = this.cacheService.get(req.url);
        

        //return chached response

        if (response) {
            console.log(`Returning a cached response: ${response.url}`);
            console.log(response);
            return of(response);
        }

        //send request to server and add response to cache
        return next.handle(req)
        .pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    console.log(`Adding item to the cach: ${req.url}`);
                    console.log('event: ', event);
                    this.cacheService.put(req.url, event);
                }
            })
        )
    }

}