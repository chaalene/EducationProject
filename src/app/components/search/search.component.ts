import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  trainer:any=[];
  searchForm:FormGroup;
  findedCourses:any=[];
  constructor(private formBuilder:FormBuilder ,private courseService: CourseService) { }

  ngOnInit() {
    this.searchForm= this.formBuilder.group({
      name:[''],
    })
  }
search(){
  console.log('trainer:',this.trainer);
  this.courseService.searchByName(this.trainer).subscribe(
    (data)=>{
      console.log("findedCourses",data.findedCourses);
      this.findedCourses=data.findedCourses;
    }
  );

}}
