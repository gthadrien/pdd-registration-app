import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetreatantPageRoutingModule } from './retreatant-routing.module';

import { RetreatantPage } from './retreatant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetreatantPageRoutingModule
  ],
  declarations: [RetreatantPage]
})
export class RetreatantPageModule {}
