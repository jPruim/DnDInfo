import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCharacterPagePageRoutingModule } from './add-character-page-routing.module';

import { AddCharacterPagePage } from './add-character-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCharacterPagePageRoutingModule
  ],
  declarations: [AddCharacterPagePage]
})
export class AddCharacterPagePageModule {}
