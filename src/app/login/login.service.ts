import { Injectable } from '@angular/core';
import { Login } from './login';
import {HttpClient, HttpErrorResponse} from  '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   selectLogin:Login;
   alluser:[]=[]


  constructor( private http:HttpClient) {
    this.selectLogin = new Login
   }
   getUsers(){
     return this.http.get("http://localhost:8000/api/users")
   }
   postLogin(login:Login){
     return this.http.post('http://localhost:8000/api/signin-user',login).pipe(
       catchError(this.errorHandle)
     )
   }
   errorHandle(error:HttpErrorResponse):Observable<any>{
      return throwError(error.error.message || "Server Error")
   }
}
