import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signupForm !:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      fullName:[""],
      email:[""],
      password:[""],
      mobile:[""]
    })
  }
  signup()
  {
    this.http.post<any>("http://localhost:3000/SignupUsers",this.signupForm.value)
    .subscribe(res=>
      {
        alert("SignUp Successfully");
        console.log(res);
        
        this.signupForm.reset();
        this.router.navigate(["login"]);
      },err=>
      {
        alert("Something Went Wrong");
      }
      )
  }

}
