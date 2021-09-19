import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-display-course',
  templateUrl: './display-course.component.html',
  styleUrls: ['./display-course.component.css']
})
export class DisplayCourseComponent implements OnInit {
  id:any;
  courses:any=[];
  constructor(private activatedRoute:ActivatedRoute, private courseSever:CourseService) { }


  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id',this.id); 

    this.courseSever.getCourseByid(this.id).subscribe(
      //retour du service: findedCourses
      (data)=>{
        console.log('here data', data);
      
        this.courses=data.findedCourses;
      }
    );
  }

}
