import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  // getCourses(){
  //   this.userService.getAllUsers().subscribe(
  //     (data)=>{
  //       this.userService=data.findedUsers;
  //     }
  //   );
  // }
}
