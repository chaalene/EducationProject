import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any = {};
  errorMessage
  constructor(
    private formBuilder: FormBuilder ,
    private userService:UserService,
    private router:Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [""],
      pwd: [""]
    });
  }
  login() {
    console.log("here my form values", this.user);
    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log('data after login',data)
        if (data.message=='0') {
          this.errorMessage=" email not exist";
        } 
        else if (data.message=='1') {
          this.errorMessage=" pwd invalid";
        } 
        else  if (data.message=='2') {
          this.router.navigate(['']);
        } 
      }
    );
  }
}
