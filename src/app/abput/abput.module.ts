import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbputPageRoutingModule } from './abput-routing.module';

import { AbputPage } from './abput.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbputPageRoutingModule
  ],
  declarations: [AbputPage]
})
export class AbputPageModule {}
