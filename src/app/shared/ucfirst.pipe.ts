import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {
    transform(value: string): string {
        return value.trim().charAt(0).toUpperCase() + value.trim().slice(1);
    }
}