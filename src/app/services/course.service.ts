import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl='http://localhost:3000/courses';
  constructor(private httpClient:HttpClient) { }

  getAllCourses(){
    return this.httpClient.get<{findedCourses:any}>(this.courseUrl);
  }
  getCourseByid(id){
    return this.httpClient.get<{findedCourses}>(`${this.courseUrl}/${id}`);
  }
  deleteCourse(id){
    return this.httpClient.delete<{message:any}>(`${this.courseUrl}/${id}`);
  }
  addCourse(course:any){
    return this.httpClient.post<{message:any}>(this.courseUrl,course);
  }
  editCourse(course:any){
    return this.httpClient.put<{message:string }>(`${this.courseUrl}/${course._id}`,course);
  }
  searchByName(trainerObj:any){
    return this.httpClient.post<{findedCourses:any }>(`${this.courseUrl}/search/trainerName`,trainerObj);
  }
  signup(user:any){
    return this.httpClient.post<{message:any}>(`${this.courseUrl}/signup`,user); 
  }
}
