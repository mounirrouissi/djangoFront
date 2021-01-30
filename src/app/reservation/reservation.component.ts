
import { Client } from '../pojos/Client';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Festival } from '../pojos/Festival';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() Festival;
  Festivals:Festival[]=[];
name:string="";
  constructor(private service:ApiService,private route:ActivatedRoute,private location:Location){}
  client: Client = {
    places: 0,
    category: '',
    name: '',
    city:'',

  };
  ngOnInit(): void {
    this.getAllFestivals();
   }
  public getAllFestivals() {
     this.service.getAllFestivals().subscribe(
       res=>{this.Festivals=res;},
       err=>{alert("searching for Festivals")}
     );
   }
reserve():void
{
  let id: string = this.route.snapshot.params.id;
 /*  for(let rest of this.Festivals)
  {
if(rest.id === id)
{
this.name=rest.name;
}
  } */
  console.log("fdsfdsfdsf"+id);
  this.service.postReservation(this.client).subscribe
(
res=>{alert("the reservation addded sucessfuly");},
err=>{alert('"problem occured'+this.name);}

);
}

goBack(): void {
  this.location.back();
}
}
