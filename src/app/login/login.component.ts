import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Login } from './login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  constructor(public loginService:LoginService, public router:Router) { }
  resp1:string=""
  ngOnInit(): void {
  this.getUsers()
  }

  getUsers(){
    this.loginService.getUsers().subscribe((res) =>{
      this.loginService.alluser = res as []
    }
  )
  }
  postLogin(form:NgForm){
    
    this.loginService.postLogin(form.value).subscribe((res) => {
       
      this.getUsers()
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
      
      this.loginService.selectLogin = new Login()
    }
    ,(error:any) => {
      this.resp1 = error
      console.log("error",this.resp1)
    }
    )
  }

}
