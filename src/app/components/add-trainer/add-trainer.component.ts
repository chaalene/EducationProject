import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TrainerService } from "src/app/services/trainer.service";

@Component({
  selector: "app-add-trainer",
  templateUrl: "./add-trainer.component.html",
  styleUrls: ["./add-trainer.component.css"],
})
export class AddTrainerComponent implements OnInit {
  id: any;
  titre: any = "";
  trainerFormGroup: FormGroup;
  trainer: any = [];
  inEdit: boolean = true;
  imagePreview: string;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private trainerService: TrainerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.trainerFormGroup = this.formBuilder.group({
      name: ["", [Validators.minLength(5), Validators.required]],
      speciality: ["", Validators.required],
      experience: ["", Validators.required],
      img: [""],
    });

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      //edit

      //display trainer on the form , afficher les données modifiable
      this.trainerService.getTrainerByid(this.id).subscribe((data) => {
        this.trainer = data.findedTrainers;
        this.trainer.title = "Edit";
      });
    } else {
      this.inEdit = false;
      //   alert('here edit')
      // this.titre= 'Add';
      // console.log('Titre',this.titre);
    }
  }

  addEditTrainer() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.trainer._id = this.id;
      this.trainerService.editTrainer(this.trainer).subscribe((data) => {
        console.log("this trainer edited:", data.message);
        this.router.navigate(["admin"]);
      });
    } else {
      console.log("this trainer:", this.trainerFormGroup.value);
      this.trainerService
        .addTrainer(
          this.trainerFormGroup.value,
          this.trainerFormGroup.value.img
        )
        .subscribe((data) => {
          console.log("add trainer", data.message);
          this.router.navigate(["admin"]);
        });
    }
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.trainerFormGroup.patchValue({ img: file });
    this.trainerFormGroup.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}