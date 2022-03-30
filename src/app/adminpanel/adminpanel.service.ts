import { Injectable } from '@angular/core';
import { Adminpanel } from './adminpanel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminpanelService {
  selectAdmin:Adminpanel;
  AllIssueData:[]=[]
  AllUserData:[]=[]
  constructor(private http:HttpClient) {
    this.selectAdmin = new Adminpanel
   }
   onGetUser(){
     return this.http.get(`http://localhost:8000/api/users`)
   }
   onGetIssue(){
     return this.http.get(`http://localhost:8000/api/stars`)
   }
   onGetSingleIssue(id:any){
    return this.http.get(`http://localhost:8000/api/stars/${id}`)
  }
   onDeleteUser(id:any){
     return this.http.delete(`http://localhost:8000/api/users/${id}`)
   }
   onUpdateIssue(id:any,data:any){
     return this.http.put(`http://localhost:8000/api/stars/${id}`,data)
   }
   onDeleteIssue(id:any){
     return this.http.delete(`http://localhost:8000/api/stars/${id}`)
   }
}
