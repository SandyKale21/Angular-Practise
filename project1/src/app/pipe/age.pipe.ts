import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    let currentYear:any = new Date().getFullYear();
    let birthYear:any = new Date(value).getFullYear();
    let userAge = currentYear-birthYear;
    console.log('currentYear' + currentYear);
    return userAge;
  }

}
