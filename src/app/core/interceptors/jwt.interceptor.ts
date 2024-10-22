import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class JwtInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string | null = localStorage.getItem('token');

        if(token){
            req = req.clone({setHeaders: {
                Authorization: `Bearer ${JSON.parse(token)}`
                }
            });
        }

    return next.handle(req).pipe
    }
}