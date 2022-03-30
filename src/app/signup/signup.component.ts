import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from './signup';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SignupService]
})
export class SignupComponent implements OnInit {

  constructor(public signupService:SignupService,public router:Router) { }
  error1:[]=[]
  resp2:Object={}
  ngOnInit(): void {
  }
  postSignup(form:NgForm){
    this.signupService.postSignup(form.value).subscribe((res) => {
      console.log("res",res)
      this.resp2 = res as object
      if(res.result.isAdmin === "no"){
        localStorage.setItem("email",res.result.email)
        localStorage.setItem("id",res.result._id)
        localStorage.setItem("isLogin","true")
      this.router.navigate(['/home'])
    }
    else{
      localStorage.setItem("email",res.result.email)
        localStorage.setItem("id",res.result._id)
        localStorage.setItem("isLogin","true")
      this.router.navigate(['/admin'])
    }
    console.log("hellow",this.signupService.selectSignup.email)
      this.signupService.selectSignup = new Signup()
    }
    ,(error:any) => {
      this.error1 = error 
      console.log("error",this.error1)
    }
    )
  }

}
