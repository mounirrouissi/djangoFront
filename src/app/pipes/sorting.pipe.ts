import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    const dateField=args[0];
    const direction=args[1];
    let  x=1;let min;
if(direction==="desc")
x=-1;

  let newVal = value.filter((a: any, b: any) => {
      let date1 = new Date(a.date);
      let date2 = new Date(b.date);

      if (date1.getTime() > date2.getTime()) {
          return 1;
      } else if (date1.getTime() < date2.getTime()) {
          return -1;
      } else {
          return 0;
      }
  });

  return newVal;
}


}
