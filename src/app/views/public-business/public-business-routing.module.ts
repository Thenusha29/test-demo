import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicBusinessComponent } from './public-business/public-business.component';

const routes: Routes = [
  {
    path: '',
    component: PublicBusinessComponent,
    data: {
      title: 'Public Business'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicBusinessRoutingModule { }
