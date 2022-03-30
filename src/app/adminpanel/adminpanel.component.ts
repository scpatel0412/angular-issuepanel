import { Component, OnInit } from '@angular/core';
import { AdminpanelService } from './adminpanel.service';
import { Router } from '@angular/router';
import { Adminpanel } from './adminpanel';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css'],
  providers:[AdminpanelService]
})
export class AdminpanelComponent implements OnInit {
  username = localStorage.getItem("email")
  toggle:any = 'false';
  images2:any;
  fd:any;
  data4:any;
  constructor(public adminpanelService:AdminpanelService, public router:Router) { }

  ngOnInit(): void {
    this.onGetIssue()
    this.onGetUser()
  }
  onGetIssue(){
    this.adminpanelService.onGetIssue().subscribe((res) => {
      this.adminpanelService.AllIssueData = res as []
    })
  }
  onGetUser(){
    this.adminpanelService.onGetUser().subscribe((res) => {
      this.adminpanelService.AllUserData = res as []
      
    })
  }
  onGetSingleIssue(id:any){
    this.adminpanelService.onGetSingleIssue(id).subscribe((res) =>{
      this.data4 = res
      console.log("data====",res)
    })
}
  onDeleteUser(id:any){
    if(window.confirm(`Are you sure you want to delete this user`)){
    this.adminpanelService.onDeleteUser(id).subscribe((res) => {
      this.onGetUser()
    })}
  }
  onPut(data:Adminpanel){
    this.adminpanelService.selectAdmin = data
    this.toggle = "true"
  }
  images1(event:any){
    if(event.target.value){
      this.images2 = <File>event.target.files[0]
    }
  }
  onUpdateIssue(form:NgForm){
    let fd = new FormData()
    fd.append("title",this.adminpanelService.selectAdmin.title)
    fd.append("description",this.adminpanelService.selectAdmin.description)
    fd.append("type",this.adminpanelService.selectAdmin.type)
    fd.append("categoryImage",this.images2)
    fd.append("image",this.images2.name)
    this.adminpanelService.onUpdateIssue(form.value._id,fd).subscribe((res) => {
      this.adminpanelService.selectAdmin = new Adminpanel
      console.log('res3 =>',res)
      this.toggle = "false"
      this.onGetIssue()
    })
  }
  onDeleteIssue(id:any){
    if(window.confirm(`Are you sure you want to delete this issue`)){
      this.adminpanelService.onDeleteIssue(id).subscribe((res) => {
        console.log("res2 =>",res)
        this.onGetIssue()
      })
    }
  }
}
