import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-admin-courses",
  templateUrl: "./admin-courses.component.html",
  styleUrls: ["./admin-courses.component.css"],
})
export class AdminCoursesComponent implements OnInit {
  constructor(private router: Router , private courseService:CourseService) {}

  dataAllCourses: any = [];
  ngOnInit() {
   
    this.getCourses();

    // this.dataAllCourses = [
    //   {
    //     id: 1,
    //     name: "Angular",
    //     price: 1800,
    //     trainer: "Abderrahmen",
    //     description: "learn Aida curAi",
    //     capacity: 20,
    //     img: "assets/images/course_5.jpg",
    //     newDate: "31",
    //     month: "Aug",
    //   },
    //   {
    //     id: 2,
    //     name: "JS",
    //     price: 5800,
    //     trainer: "hajer",
    //     description: "learn JS lanqgage",
    //     img: "assets/images/course_3.jpg",
    //     capacity: 20,
    //     newDate: "10",
    //     month: "Sep",
    //   },
    //   {
    //     id: 3,
    //     name: "React",
    //     price: 800,
    //     trainer: "Maryem",
    //     description: "learn Ract Framwork",
    //     img: "assets/images/course_6.jpg",
    //     capacity: 20,
    //     newDate: "05",
    //     month: "Sep",
    //   },
    //   {
    //     id: 4,
    //     name: "NodeJs",
    //     price: 1200,
    //     trainer: "oussama",
    //     description: "learn Node Framwork",
    //     img: "assets/images/course_2.jpg",
    //     capacity: 1,
    //     newDate: "01",
    //     month: "Oct",
    //   },
    // ];
  }
  goToDisplayCourse(id: number) {
    this.router.navigate([`display-course/${id}`]);
  }

  goToEditCourse(id: any) {
    this.router.navigate([`edit-course/${id}`]);
  }

  deleteCourse(id: any) {
    this.courseService.deleteCourse(id).subscribe(
      (data)=>{
        console.log('Here msg from BE',data.message);
        this.getCourses();
      }
    );
  }

  getCourses(){
    this.courseService.getAllCourses().subscribe(
      (data)=>{
        this.dataAllCourses=data.findedCourses;
      }
    );
  }
}

