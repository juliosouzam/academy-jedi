import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'sex'
})
export class SexPipe implements PipeTransform {
    transform(value: string): string {
        if (value.toLocaleLowerCase() == 'masculino') {
            return 'M';
        }

        if (value.toLocaleLowerCase() == 'feminino') {
            return 'F';
        }

        return value;
    }
}