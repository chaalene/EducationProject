import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  dataAllUsers:any=[];
  UsersData:any=[];
  constructor(private userService:UserService, private router:Router) { }
  
  ngOnInit() {
   this.userService.getAllUsers().subscribe(
     (data)=>{
       console.log('allusers',data.findedUsers);
      this.dataAllUsers=data.findedUsers
     }

   );

    // this.dataAllUsers = [
    //   {
    //     id: 1,
    //     name: "Administrateur",
    //     email: "admin@gmail.com",
    //     password: "12345678",
    //     role:'admin'
    //   },  
    //   {
    //     id: 2,
    //     name: "Hajer chaalene",
    //     email: "hajer@gmail.com",
    //     password: "12345678",
    //     role:'User'
    //   },
    //   {
        
    //   id: 3,
    //   name: "saif bahri",
    //   email: "saif@gmail.com",
    //   password: "12345678",
    //   role:'User'
    // }
    // ];
  }

  goToDisplayUser(id: number) {
    this.router.navigate([`display-user/${id}`]);
  }
  
  goToEditUser(id: number) {
    this.router.navigate([`edit-user/${id}`]);
  }
  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(
      (data)=>{
        console.log('Here msg from BE',data.message);
        this.userService.getAllUsers().subscribe(
          (data)=>{
            console.log('Im in admin-trainer',data.findedUsers);
            this.dataAllUsers=data.findedUsers
          }
        );
      }
    );
  }
}
