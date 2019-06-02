import { Component } from '@angular/core';
import { IEstudante } from './IEstudante';
import { EstudanteService } from './estudantes.service';

@Component({
  selector: 'jedi-estudantes',
  templateUrl: './lista-estudantes.component.html'
})

export class EstudantesComponent {
    count: number = 0;
    showImage: boolean = true;
    title: string = 'Lista Estudantes';
    larguraImagem: number = 100;
    margenImagem: number = 2;
    messageErro: string = '';
    _filterList: string;
    get filterList() : string {
        return this._filterList;
    }

    set filterList(valor: string) {
        this._filterList = valor;
        this.estudantesFiltrados = this.filterList ? this.executeFilter(this.filterList) : this.estudantes;
      }
  
    estudantesFiltrados: IEstudante[];
    estudantes: IEstudante[] = [];

    constructor(private estudentSevice: EstudanteService)
    {
    }

    ngOnInit(): void
    {
      this.estudentSevice.studentList().subscribe(
        students => {
          this.estudantes = students;
          this.estudantesFiltrados = this.estudantes;
        },
        error => this.messageErro = <any>error
      );
    }

    alterImage() : void
    {
        this.showImage = !this.showImage;    
    }

    executeFilter(filtrarPor: string): IEstudante[]
    {
        filtrarPor = filtrarPor.toLocaleLowerCase();

        return this.estudantes.filter((estudante: IEstudante) => estudante.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1);
  }
}
