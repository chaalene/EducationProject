import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() eventInput:any;
  ngOnInit() {
  }

 
  goToDisplay(id:any){
    this.router.navigate([`display-course/${id}`]);
  }
}
