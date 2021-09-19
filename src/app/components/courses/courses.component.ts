import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit {
  
  dataCourse:any= [];;
  constructor(private courseService:CourseService, private router:Router) {}

  ngOnInit() {
  this.courseService.getAllCourses().subscribe(
    (data)=>{
      console.log('here data', data);
      this.dataCourse= data.findedCourses;
    }
  );

    // this.courses = [
    //   {
    //     id: 1,
    //     name: "Angular",
    //     price: 1800,
    //     trainer: "Abderrahmen",
    //     description: "learn Aida curAi",
    //     capacity: 20,
    //     newDate: new Date()
    //   },
    //   {
    //     id: 1,
    //     name: "JS",
    //     price: 5800,
    //     trainer: "hajer",
    //     description: "learn JS lanqgage",
    //     capacity: 20,newDate: new Date()
    //   },
    //   {
    //     id: 1,
    //     name: "React",
    //     price: 800,
    //     trainer: "maryem",
    //     description: "learn Ract Framwork",
    //     capacity: 20,newDate: new Date()
    //   },
    //   {
    //     id: 1,
    //     name: "NodeJs",
    //     price: 1200,
    //     trainer: "oussama",
    //     description: "learn Node Framwork",
    //     capacity: 1,newDate: new Date()
    //   },
    // ];
  }

  viewAllAourses(){
   this.router.navigate(['all-courses']);

  }
}
