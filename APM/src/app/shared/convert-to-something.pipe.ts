import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convert'
})
export class ConvertToSomething implements PipeTransform {

    transform(value: string, replacer: string, ...replacees: string[]): string {
        for(let ch of replacees){
            value = value.replace(ch, replacer);
            console.log(value);
        }
        return value;
    }

}