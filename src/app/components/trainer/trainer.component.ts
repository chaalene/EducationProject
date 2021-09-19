import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  @Input() trainerInput: any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  goToDisplay(id:any){
    this.router.navigate([`display-trainer/${id}`]);
  }
}
