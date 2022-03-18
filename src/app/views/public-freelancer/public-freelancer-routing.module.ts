import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicFreelancerComponent } from './public-freelancer/public-freelancer.component';

const routes: Routes = [
  {
    path: '',
    component: PublicFreelancerComponent,
    data: {
      title: 'Public Freelancer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicFreelancerRoutingModule { }
