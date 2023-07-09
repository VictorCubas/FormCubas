import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';



@NgModule({
  declarations: [
    MainWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainWrapperComponent
  ]
})
export class MainWrapperModule { }
