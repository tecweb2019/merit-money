import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class LoginserviceService {
    static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
    static Url = "http://localhost:3001/api/v1/login/token";

    constructor(private http: HttpClient) {
    }

    logar(email,senha ): Observable<any>{
       return this.http.post(LoginserviceService.Url,
           JSON.stringify({"email": email, "senha" : senha}),
           LoginserviceService.httpOptions);

    }
}