import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  courses:any;
  id:any;
  dataAllCourses: any = [];
  constructor(
    private courseService:CourseService,
    private  router:Router,
    private activatedRoute:ActivatedRoute) { }

 
  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID', this.id);
    this.courseService.getAllCourses().subscribe(
      //retour du service: findedCourses
      (data)=>{
        console.log('here data', data);
      
        this.courses=data.findedCourses;
      }
    );
    // this.dataAllCourses = [
    //   {
    //     id: 1,
    //     name: "Angular",
    //     price: 1800,
    //     trainer: "Abderrahmen",
    //     description: "learn Aida curAi",
    //     capacity: 20,
    //     img: 'assets/images/course_5.jpg',
    //     newDate: '31',
    //     month:'Aug'
    //   },
    //   {
    //     id: 2,
    //     name: "JS",
    //     price: 5800,
    //     trainer: "hajer",
    //     description: "learn JS lanqgage",
    //     img: 'assets/images/course_3.jpg',
    //     capacity: 20,newDate:'10',
    //     month:'Sep'
    //   },
    //   {
    //     id: 3,
    //     name: "React",
    //     price: 800,
    //     trainer: "Maryem",
    //     description: "learn Ract Framwork",
    //     img: 'assets/images/course_6.jpg',
    //     capacity: 20,newDate: '05',
    //     month:'Sep'
    //   },
    //   {
    //     id: 4,
    //     name: "NodeJs",
    //     price: 1200,
    //     trainer: "oussama",
    //     description: "learn Node Framwork",
    //     img: 'assets/images/course_2.jpg',
    //     capacity: 1,newDate: '01',
    //     month:'Oct'
        
    //   },
    // ];
  }
  
}
