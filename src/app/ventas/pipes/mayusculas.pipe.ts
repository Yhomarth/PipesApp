import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(str:string) : string{
        return 'HOLA MUNDO!';
    }

}
