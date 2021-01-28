import { Restaurant } from './../pojos/Restaurant';
import { ApiService } from './../services/api.service';
import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  serachedDate: String;
restaurants:Restaurant[]=[];
  ngOnInit(): void {
   this.getAllRestaurants();
  }
 public getAllRestaurants() {
    this.service.getAllRestaurants().subscribe(
      res=>{this.restaurants=res;},
      err=>{alert("searching for restaurants")}
    );
  }

constructor(private service:ApiService){}
/*   s:string=new Date("2015-03-25").toISOString().substring(0, 16).replace("T",'-');*/
  todayDate : any=new Date("2017-03-25T12:00");

sortByDate='';
name='';
searchedName='';
searchedStatus='';
sortByStatus='';


onrestaurantDelete(restaurant:Restaurant) {
  if(confirm("Are you sure you want to delete this note?")){
    this.service.deleteRestaurant(restaurant.id).subscribe(
      res =>{
        let indexOfRestaurant = this.restaurants.indexOf(restaurant);
        this.restaurants.splice(indexOfRestaurant, 1);
      },
      err=>{alert("An error has occurred deleting the note");}
    );
  }

}
search()
{
  this.searchedName=this.name;
  this.searchedStatus =this.sortByStatus;
  this.serachedDate=this.todayDate.toISOString();
}

}


