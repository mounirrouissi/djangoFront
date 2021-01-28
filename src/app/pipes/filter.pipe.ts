import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterString:string ,propName:string): any[] {

   const val=[];
    if(value.length===0||propName===''||filterString===''||filterString==='All'){
      return value;
    }

      for(const item of value)
      {

        if(item[propName]===filterString)
        val.push(item);
      }
      return val;

    }


}
