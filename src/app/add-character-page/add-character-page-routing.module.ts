import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCharacterPagePage } from './add-character-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddCharacterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCharacterPagePageRoutingModule {}
