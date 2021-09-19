import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from "src/app/services/trainer.service";


@Component({
  selector: 'app-admin-trainers',
  templateUrl: './admin-trainers.component.html',
  styleUrls: ['./admin-trainers.component.css']
})
export class AdminTrainersComponent implements OnInit {
  trainersData:any=[];
  constructor( private router:Router, private trainerService:TrainerService) { }
 
  ngOnInit() {
  this.trainerService.getAllTrainers().subscribe(
    (data)=>{
      console.log('Im in admin-trainer',data.findedTrainer);
      this.trainersData=data.findedTrainer
    }
  );


//   this.trainersData=[{
//     id: 1,
//     name: "Mariem",
//     speciality: "JavaScript",
//     experiences: '5ans',
//     img :"assets/images/mariem.jpg"    
//   },
//   {
//     id: 2,
//     name: "Abderrahmen",
//     speciality: "Js & Angular",
//     experiences: '9ans',
//     img :"assets/images/abdo2.jpg"    
//   },{
//     id: 3,
//     name: "Aida",
//     speciality: "React",
//     experiences: '6ans',
//     img :"assets/images/team_3.jpg"    
//   },{
//     id: 4,
//     name: "Takwa",
//     speciality: "Html & CSS & Bootstrap",
//     experiences: '6ans',
//     img :"assets/images/team_1.jpg"    
//   },{
//     id: 5,
//     name: "Hamza",
//     speciality: "Fullstack JS",
//     experiences: '2ans',
//     img :"assets/images/team_2.jpg"    
//   },


// ] 
}

goToDisplayTrainer(id: number) {
  this.router.navigate([`display-trainer/${id}`]);
}

goToEditTrainer(id: number) {
  this.router.navigate([`edit-trainer/${id}`]);
}
deleteCourse(id: any) {
  this.trainerService.deleteTrainer(id).subscribe(
    (data)=>{
      console.log('Here msg from BE',data.message);
      this.trainerService.getAllTrainers().subscribe(
        (data)=>{
          console.log('Im in admin-trainer',data.findedTrainer);
          this.trainersData=data.findedTrainer
        }
      );
    }
  );
}
}
