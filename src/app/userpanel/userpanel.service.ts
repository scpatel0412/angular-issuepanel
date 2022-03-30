import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { Userpanel } from './userpanel';

@Injectable({
  providedIn: 'root'
})
export class UserpanelService {
  selectUser:Userpanel;
  getIssue:[]=[]
  constructor(private http:HttpClient) {
    this.selectUser = new Userpanel
   }
   onGetIssue(){
     return this.http.get(`http://localhost:8000/api/stars`)
   }
   onGetSingleIssue(id:any){
    return this.http.get(`http://localhost:8000/api/stars/${id}`)
   }
   onPostIssue(data:any){
     return this.http.post(`http://localhost:8000/api/stars`,data)
   }
   onUpdateIssue(id:any,data:any){
     return this.http.put(`http://localhost:8000/api/stars/${id}`,data)
   }
   onDeleteIssue(id:any){
     return this.http.delete(`http://localhost:8000/api/stars/${id}`)
   }
}
