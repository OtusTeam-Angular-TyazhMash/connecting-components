import { AbstractControl, ValidatorFn } from "@angular/forms";

export function vinValidator(): ValidatorFn{
    return (control: AbstractControl): {[key:string]: any} | null =>{
        const vin = control.value;
        const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;

        if (!vinRegex.test(vin)){
            return {'invalidVIN': {value: vin}}
        }
        return null;
    }
}