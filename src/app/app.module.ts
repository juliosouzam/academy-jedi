import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/lista-estudantes.component';
import { SexPipe } from './shared/sex.pipe';
import { EstudanteDetailComponent } from './estudantes/estudante-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { UcfirstPipe } from './shared/ucfirst.pipe';
import { StudentDetailGuard } from './estudantes/student-detail.guard';

@NgModule({
    declarations: [
        AppComponent,
        EstudantesComponent,
        SexPipe,
        UcfirstPipe,
        EstudanteDetailComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'students', component: EstudantesComponent },
            { path: 'students/:id', canActivate: [StudentDetailGuard], component: EstudanteDetailComponent },
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full'},
            { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
