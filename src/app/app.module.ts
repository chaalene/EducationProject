import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { ChangePipe } from './pipes/change.pipe';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminTrainersComponent } from './components/admin-trainers/admin-trainers.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { DisplayCourseComponent } from './components/display-course/display-course.component';
import { DisplayTrainerComponent } from './components/display-trainer/display-trainer.component';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes :Routes = [
  // '' => http://localhost/4200
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent} ,
  {path: 'all-courses', component: AllCoursesComponent} ,
  {path: 'trainers', component: TrainersComponent} ,
  {path: 'admin', component: AdminComponent},
  {path: 'admin-trainers', component: AdminTrainersComponent} ,
  {path: 'admin-courses', component: AdminCoursesComponent} ,
  {path: 'admin-users', component: AdminUsersComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'edit-course/:id', component: AddCourseComponent},
  {path: 'display-course/:id', component: DisplayCourseComponent},
  {path: 'display-trainer/:id', component: DisplayTrainerComponent},
  {path: 'edit-trainer/:id', component: AddTrainerComponent},
  {path: 'add-trainer', component: AddTrainerComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'edit-user/:id', component: AddUserComponent},
  {path: 'search', component: SearchComponent},
  {path: 'display-user/:id', component: DisplayUserComponent},
  {path: 'weather', component: WeatherComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CourseComponent,
    CoursesComponent,
    EventsComponent,
    EventComponent,
    TutorsComponent,
    TutorComponent,
    AsterixPipe,
    ReversePipe,
    ChangePipe,
    AllCoursesComponent,
    TrainersComponent,
    TrainerComponent,
    AdminComponent,
    AdminTrainersComponent,
    AdminCoursesComponent,
    AdminUsersComponent,
    DisplayCourseComponent,
    DisplayTrainerComponent,
    AddTrainerComponent,
    AddUserComponent,
    SearchComponent,
    AddCourseComponent,
    DisplayUserComponent,
    WeatherComponent,
   
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
