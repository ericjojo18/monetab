import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {

    private tokenKey: string = 'token';
    private currentUser: string = 'currentUser';



    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    saveToke(token: string){
        localStorage.setItem(this.tokenKey, token);
    }

    destroyToken(){
        localStorage.removeItem(this.tokenKey);
    }

    getCurrentUser() {
        const user: string | null = localStorage.getItem(this.currentUser);
        if(user != null){
            return JSON.parse(user);
        }
        return null
    }

    isAuthentified() {
        return this.getToken() != null;
    }
}
