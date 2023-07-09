import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainWrapperModule } from './components/main-wrapper/main-wrapper.module';
import { HeaderModule } from './components/header/header.module';
import { FormularioModule } from './components/formulario/formulario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainWrapperModule,
    HeaderModule,
    FormularioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
