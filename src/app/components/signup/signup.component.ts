import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   signupForm:FormGroup;
  
  constructor(private fb:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.minLength(2), Validators.required]],
      lastName: ['', Validators.minLength(2)],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(8), Validators.maxLength(12)]],
      confirmPwd: [''],
      tel: ['',Validators.maxLength(8)]
      },
      {
      validator: MustMatch('pwd','confirmPwd')
      }
      );
  }

  signup(){
    console.log('here my object', this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (data)=>{
        console.log('here user signup',data.message);
        this.router.navigate(['']);
      }
    )
  }

}
