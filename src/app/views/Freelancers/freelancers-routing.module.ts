import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancersComponent } from './freelancers/freelancers.component';


const routes: Routes = [
  {
    path: '',
    component: FreelancersComponent,
    data: {
      title: ' Freelancers'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancersRoutingModule { }
