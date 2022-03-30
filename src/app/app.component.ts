import { Component} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-issuepanel';
  year = new Date().getFullYear();
  vals1 = localStorage.getItem("isLogin")
  
  
  constructor(public router:Router){}
  
  logout(){
    localStorage.removeItem("id")
    localStorage.removeItem("email")
    localStorage.setItem("isLogin",'false')
    this.router.navigate(["/"])
  }
}
