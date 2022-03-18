import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicBusinessRoutingModule } from './public-business-routing.module';
import { PublicBusinessComponent } from './public-business/public-business.component';


@NgModule({
  declarations: [
    PublicBusinessComponent
  ],
  imports: [
    CommonModule,
    PublicBusinessRoutingModule
  ]
})
export class PublicBusinessModule { }
