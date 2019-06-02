import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js'


@Injectable({
    providedIn: 'root'
})
export class StudentDetailGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
            let id = +next.url[1].path;
            if (isNaN(id) || id < 1) {
                Swal.fire({
                    type: 'error',
                    title: 'Error!',
                    text: `ID ${id}, não é um número válido!`,
                  })
                this.router.navigate(['/students']);
                return false;
            }

            return true;
        }
}
