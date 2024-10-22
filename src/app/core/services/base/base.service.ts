import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "./localStorage.service";
import { environmentDev } from "../../../../environement/environment.dev";
import { catchError } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class BaseService {



    private baseUrl = environmentDev.baseUrl;

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }
    getAll(endPoint: string, filterString?: string) {
        const url = filterString ? `${this.baseUrl}/${endPoint}?${filterString}` : `${this.baseUrl}/${endPoint}`;
        return this.http.get(url).pipe(catchError(this.handleError));
    }

    getOne(endPoint: string, id: number ){
        const url =  `${this.baseUrl}/${endPoint}/${id}`;
        return this.http.get(url).pipe(catchError(this.handleError));
    }

    create(endPoint: string, data:any){

        return this.http.post(endPoint, data).pipe(catchError(this.handleError));
    }

    update(endPoint: string, id: any, data: any){
        const url = `${this.baseUrl}/${endPoint}/${id}`
        return this.http.put(url, data).pipe(catchError(this.handleError));
    }

    delete(endPoint: string, id: number){
        const url = `${this.baseUrl}/${endPoint}/${id}`;
        return this.http.delete(url ).pipe(catchError(this.handleError));
    }

    private handleError(error: any) {
        let errorMessage = 'Une erreur s\'est produite.';

        if (error.error instanceof ErrorEvent) {
            // Erreur du côté client
            errorMessage = `Erreur : ${error.error.message}`;
        } else {
            // Erreur du côté serveur
            if (error.status === 400) {
                errorMessage = `${error.error.message}`;
            }
            else if (error.status === 401) {
                errorMessage = `${error.error.message}`;
            } else if (error.status === 404) {
                errorMessage = `${error.error.message}`;
            } else if (error.status === 500) {
                errorMessage = `${error.error.message}`;
            }else if (error.status === 510) {
                errorMessage = `${error.error.message}`;
            } else {
                // Autres codes d'erreur
                errorMessage = error.message??'Erreur inattendue. Veuillez réessayer plus tard.';
            }
        }

        return throwError(errorMessage);
    }

}
