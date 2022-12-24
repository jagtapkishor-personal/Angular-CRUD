import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { 
    
  }
  
  ngOnInit(): void {
    this.loginForm= this.fb.group({
      email:[""],
      password:[""]
    })
  }

  login()
  {
    this.http.get<any>("http://localhost:3000/SignupUsers")
    .subscribe(res=>
      {
        const user= res.find((a:any)=>{          
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if(user){
          alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(["dashboard"])
        }
        else{
          alert("user not found")
        }
      },err=>{
        alert("something Went Wrong")
      }
      )
  }


}
