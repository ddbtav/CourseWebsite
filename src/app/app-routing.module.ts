import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';

import {TeachersHomeComponent} from './views/teachers-home/teachers-home.component';
import {StudentsHomeComponent} from './views/students-home/students-home.component';
import {AnnouncementsComponent} from './views/announcements/announcements.component';

const routes: Routes = [
  {path: 'home', component: AnnouncementsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'teacher', component: TeachersHomeComponent},
  {path: 'student', component: StudentsHomeComponent},
  {path: '**', component: AnnouncementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }