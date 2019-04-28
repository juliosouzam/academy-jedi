import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/lista-estudantes.component';
import { SexPipe } from './shared/sex.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    SexPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
