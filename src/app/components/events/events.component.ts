import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  dataEvents: any = [];
  constructor() { }

  ngOnInit() {
    this.dataEvents = [
      {
        id: 1,
        title: "Events 1",
        time: '17h-18h',
        date: "25",
        adresse: "Tunis",
        description: "description/description/description",
        img: 'assets/images/course_5.jpg'
      },
      {
        id: 1,
        title: "Events 2",
        time: '17h-18h',
        date: "18",
        adresse: "Tunis",
        description: "description/description/description",
        img: 'assets/images/course_4.jpg'
      }, {
        id: 1,
        title: "Events 3",
        time: '17h-18h',
        date: "12",
        description: "description/description/description",
        img: 'assets/images/course_6.jpg'
      }, {
        id: 1,
        title: "Events 4",
        time: '17h-18h',
        date: "13",
        adresse: "Tunis",
        description: "description/description/description",
        img: 'assets/images/course_2.jpg'
      }, {
        id: 1,
        title: "Events 5",
        time: '17h-18h',
        date: "14",
        adresse: "Tunis",
        description: "description/description/description",
        img: 'assets/images/course_3.jpg'
      },
    ];



  }
  
}
