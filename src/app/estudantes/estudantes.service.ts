import {Injectable} from '@angular/core';
import { IEstudante } from './IEstudante';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    'providedIn' : 'root'
})
export class EstudanteService
{
    private studentUrl = 'api/estudantes/estudantes.json';

    constructor(private http: HttpClient) {}

    studentList() : Observable<IEstudante[]> {
        return this.http.get<IEstudante[]>(this.studentUrl).pipe(
            tap(data => console.log('All ' + JSON.stringify(data))),
            catchError(this.trataErro)
        );
    }

    student(id: number): Observable<IEstudante | undefined>
    {
        return this.studentList().pipe(
            map((students: IEstudante[]) => students.find(p => p.id === id))
        );
    }

    private trataErro(erro: HttpErrorResponse)
    {
        let message = '';
        if (erro.error instanceof ErrorEvent) {
            message = `Um erro ocorreu: ${erro.error.message}`;
        } else {
            message = `Servidor encontrou um código: ${erro.status}, a messagem de erro é ${erro.message}`;
        }

        return throwError(message);
    }
}