import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  constructor(private trainerService:TrainerService) { }
  trainersData:any=[];

  ngOnInit() {
    this.trainerService.getAllTrainers().subscribe(
      (data)=>{
        console.log('Im in admin-trainer',data.findedTrainer);
        this.trainersData=data.findedTrainer
      }
    );
    }

  //   this.trainersData=[{
  //     id: 1,
  //     name: "Mariem",
  //     speciality: "JavaScript",
  //     experiences: '5ans',
  //     img :"assets/images/mariem.jpg"    
  //   },
  //   {
  //     id: 1,
  //     name: "Abderrahmen",
  //     speciality: "Js & Angular",
  //     experiences: '9ans',
  //     img :"assets/images/abdo2.jpg"    
  //   },{
  //     id: 1,
  //     name: "Aida",
  //     speciality: "React",
  //     experiences: '6ans',
  //     img :"assets/images/team_3.jpg"    
  //   },{
  //     id: 1,
  //     name: "Takwa",
  //     speciality: "Html & CSS & Bootstrap",
  //     img :"assets/images/team_1.jpg"    
  //   },{
  //     id: 1,
  //     name: "Hamza",
  //     speciality: "Fullstack JS",
  //     experiences: '2ans',
  //     img :"assets/images/team_2.jpg"    
  //   },
  
  
  // ]
  // }

};
