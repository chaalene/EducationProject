import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  trainerUrl='http://localhost:3000/trainers';
  constructor( private httpClient: HttpClient) { }

  
  getAllTrainers(){
    return this.httpClient.get<{findedTrainer:any}>(this.trainerUrl);
  }
  getTrainerByid(id){
    return this.httpClient.get<{findedTrainers:any}>(`${this.trainerUrl}/${id}`);
  }
  deleteTrainer(id){
    return this.httpClient.delete<{message:any}>(`${this.trainerUrl}/${id}`);
  }
  addTrainer(trainer:any,img:File){
    let formData=new FormData;
    formData.append('name',trainer.name);
    formData.append('email',trainer.email);
    formData.append('speciality',trainer.speciality);
    formData.append('experience',trainer.experience);
    formData.append('img',img);
    return this.httpClient.post<{message:any}>(this.trainerUrl,formData);
  }
  editTrainer(trainer:any){
    return this.httpClient.put<{message:any}>(`${this.trainerUrl}/${trainer._id}`,trainer);
  }
}
