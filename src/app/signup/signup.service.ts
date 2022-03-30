import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Signup } from './signup';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  selectSignup:Signup;
  
  constructor(private http:HttpClient) {
    this.selectSignup = new Signup
   }
   postSignup(signup:Signup){
     return this.http.post('http://localhost:8000/api/register-user',signup).pipe(
       catchError(this.errorHandle)
     )
   }
   errorHandle(error:HttpErrorResponse):Observable<any>{
     return throwError(error.error.map((i:any) => {
       return  i.msg
     })) 
   }
}
