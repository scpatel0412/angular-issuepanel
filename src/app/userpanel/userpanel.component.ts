import { Component, OnInit } from '@angular/core';
import { Userpanel } from './userpanel';
import { Router } from '@angular/router';
import { UserpanelService } from './userpanel.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css'],
  providers:[UserpanelService]
})
export class UserpanelComponent implements OnInit {
  username = localStorage.getItem("email")
  userid:any
  formdata:any;
  image2:any;
  data2:any;
  data3:any=[]
  data4:any;
    constructor(public userpanelService:UserpanelService, public router:Router) { }

  ngOnInit(): void {
   this.onGetIssue()
  
  }
  image1(event:any){
    if(event.target.value){
       this.image2 = <File>event.target.files[0]
       console.log("image",this.image2)
    }
  }
  onGetIssue(){
    this.userpanelService.onGetIssue().subscribe((res) => {
      this.userpanelService.getIssue = res as [];
      this.data3 = this.userpanelService.getIssue.filter((i) => {return i['set_id'] === localStorage.getItem("id") })
      console.log("all data",this.userpanelService.getIssue)
    })
  }
  
  onPostIssue(form:NgForm){
    let fd = new FormData();
    this.userid = localStorage.getItem("id")
    fd.append("title", this.userpanelService.selectUser.title)
    fd.append("description", this.userpanelService.selectUser.description)
    fd.append("type", this.userpanelService.selectUser.type)
    fd.append("set_id",this.userid)
    fd.append("categoryImage", this.image2)
    fd.append("name", this.image2.name)
    if(form.value._id){
      this.userpanelService.onUpdateIssue(form.value._id,fd).subscribe((res) => {
        this.onGetIssue()
        this.userpanelService.selectUser = new Userpanel()
        this.image2.reset()
      })
    }
    else{
      
    this.userpanelService.onPostIssue(fd).subscribe((res) => {
      this.data2 = res
      this.userpanelService.selectUser = new Userpanel()
      this.onGetIssue()
    })
  }

  }
  putissue(user:Userpanel){
    console.log("usert",user)
    this.userpanelService.selectUser = user
  }
  onGetSingleIssue(id:any){
      this.userpanelService.onGetSingleIssue(id).subscribe((res) =>{
        this.data4 = res
        console.log("data====",res)
      })
  }
  onDeleteIssue(id:string){
    if(window.confirm('are you sure you want to delete this issue')){
    this.userpanelService.onDeleteIssue(id).subscribe((res)=>{
      this.onGetIssue()
      console.log("del",res)
    })}
  }
}
