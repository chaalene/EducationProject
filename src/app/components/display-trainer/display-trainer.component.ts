import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-display-trainer',
  templateUrl: './display-trainer.component.html',
  styleUrls: ['./display-trainer.component.css']
})
export class DisplayTrainerComponent implements OnInit {
  trainer:any=[];
  id:any;
  constructor(private activatedRoute:ActivatedRoute, private trainerService:TrainerService) { }

  ngOnInit() {

  this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id',this.id); 
   this.trainerService.getTrainerByid(this.id).subscribe(
     (data)=>{
       console.log('display trainer by id',data.findedTrainers)
       this.trainer=data.findedTrainers;
     }
   ) 
  }

}
