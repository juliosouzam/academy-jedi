import { Component, OnInit } from '@angular/core';
import { IEstudante } from './IEstudante';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudanteService } from './estudantes.service';

@Component({
    templateUrl: './estudante-detail.component.html',
    styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {
    titlePage: string = 'Detalhe do Estudante';
    student: IEstudante | undefined;
    messageError: string = '';
    widthImage: number = 260;

    constructor(private route: ActivatedRoute, private router: Router, private service: EstudanteService) { }

    ngOnInit()
    {
        let param = this.route.snapshot.paramMap.get('id');
        if (param) {
            let id = +param;
            this.getStudent(id);
        }
    }

    getStudent(id: number) : void {
        this.service.student(id).subscribe(
            student => this.student = student,
            error => this.messageError = <any>error
        );
    }

    onVoltar() : void
    {
        this.router.navigate(['/students']);
    }
}
