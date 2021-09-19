import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  @Input() courseInput: any;

  constructor(private courseService:CourseService, private router:Router) {}
  ngOnInit() {}

  plural(nbr: number) {
    //   if (nbr>1) {
    //     return 'Students';
    //   } else {
    //     return 'Student';
    //   }
    // }
    return (nbr >= 2) ? "students" : "student";
  }
  priceColor(price:number){
  if (price>=0 && price <=1000) {
    return ['0','red'];
  } else if (price>1000 && price <=2000){
    return ['1','green'];
  } else{
    return ['2','orange'];
  }
  }

  goToDisplay(id:any){
    this.router.navigate([`display-course/${id}`]);
  }
}
