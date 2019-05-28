import { Component, OnInit } from '@angular/core';
import { IEstudante } from './IEstudante';

@Component({
    templateUrl: './estudante-detail.component.html',
    styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {
    titlePage: string = 'Detalhe do Estudante';
    student: IEstudante;

    constructor() { }

    ngOnInit() {
    }
}
