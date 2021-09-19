import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {
   dataTutors:any=[];
  constructor() { }

  ngOnInit() {

    this.dataTutors=[{
      id: 1,
      name:'Ali',
      speciality:'Technologie',
      img: 'assets/images/course_4.jpg',
      socialLink:['facebook','linkedin','tweeter']
    },
    {
      id: 1,
      name:'Ali',
      speciality:'Technologie',
      img: 'assets/images/course_4.jpg',
      socialLink:['facebook','linkedin','tweeter']
    },
    {
      id: 1,
      name:'Ali',
      speciality:'Technologie',
      img: 'assets/images/course_4.jpg',
      socialLink:['facebook','linkedin','tweeter']
    }

    ]

  }

}
