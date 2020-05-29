import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyPageRoutingModule } from './faculty-routing.module';

import { FacultyPage } from './faculty.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyPageRoutingModule,
    HttpClientModule
  ],
  declarations: [FacultyPage]
})
export class FacultyPageModule {}
