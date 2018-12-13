import { PipeTransform, Pipe } from "@angular/core";
import { ConvertToSomething } from "./convert-to-something.pipe";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe extends ConvertToSomething {

    transform(value: string, ...replacees: string[]): string {
        return super.transform(value, ' ', ...replacees);
    }
}