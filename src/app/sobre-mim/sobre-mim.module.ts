import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreMimPageRoutingModule } from './sobre-mim-routing.module';

import { SobreMimPage } from './sobre-mim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreMimPageRoutingModule
  ],
  declarations: [SobreMimPage]
})
export class SobreMimPageModule {}
