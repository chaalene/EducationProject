import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  id:any;
  titre: any;
  courseForm: FormGroup;
  course: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private courseService:CourseService,
    private router:Router) {}

    
  ngOnInit() {

    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.titre= 'Edit';
      this.courseService.getCourseByid(this.id).subscribe(
        (data)=>{
          this.course=data.findedCourses;
        }
      )
    } else {
      this.titre= 'Add';
    }

    this.courseForm = this.formBuilder.group({
      name: [""],
      price: [""],
      traiener: [""],
      duration: [""],
      capacity: [""]
    });
   
    
  }
  addEditCourse() {
    if (this.id) {
      //Edit business logic
    console.log("here my form values", this.course);
    this.courseService.editCourse(this.course).subscribe(
      (data)=>{
        console.log('here data after update',data.message);
        this.router.navigate(['admin']);
      }
    );

    }
       
    else {
     //Add business logic
      console.log("here my form values", this.course);
      this.courseService.addCourse(this.course).subscribe(
        (data)=>{
          console.log("Data after saving course",data.message);
          this.router.navigate(['admin'])
        }
      );
    }
  }

}
