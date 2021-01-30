import { Festival } from '../pojos/Festival';
import {Component, EventEmitter, Input, OnInit, Output} from'@angular/core'
import { ApiService } from '../services/api.service';

@Component({
        selector:'app-item',
        templateUrl:'./item.component.html',
        styleUrls: ["./item.component.css"]

    })
export class ItemComponent implements OnInit
{
  Festivals: Festival[]=[];

constructor( private service:ApiService){}
ngOnInit(): void {

}


@Input() Festival;
@Output() delete=new EventEmitter();
Delete(){
  this.delete.emit(this.Festival);
}
}
