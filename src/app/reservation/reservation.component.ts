
import { Client } from '../pojos/Client';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Restaurant } from '../pojos/Restaurant';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() restaurant;
  restaurants:Restaurant[]=[];
name:string="";
  constructor(private service:ApiService,private route:ActivatedRoute,private location:Location){}
  client: Client = {
    name: '',
    email:'',
   /*  category: '', */
    places: 0,
    RestaurantName:''
  };
  ngOnInit(): void {
    this.getAllRestaurants();
   }
  public getAllRestaurants() {
     this.service.getAllRestaurants().subscribe(
       res=>{this.restaurants=res;},
       err=>{alert("searching for restaurants")}
     );
   }
reserve():void
{
  let id: string = this.route.snapshot.params.id;
 /*  for(let rest of this.restaurants)
  {
if(rest.id === id)
{
this.name=rest.name;
}
  } */
  console.log("fdsfdsfdsf"+id);
  this.service.postReservation(id,this.client).subscribe
(
res=>{alert("the reservation addded sucessfuly");},
err=>{alert('"problem occured'+this.name);}

);
}

goBack(): void {
  this.location.back();
}
}
