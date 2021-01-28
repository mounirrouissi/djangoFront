import { Restaurant } from './../pojos/Restaurant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackViewModel } from '../feedback/feedback.component';
import { Client } from '../pojos/Client';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  getAllReservations():Observable<Client[]> {
    return this.http.get<Client[]>(this.ALL_RESTAURANTS_URL + '/reservations');
  }
  private BASE_URL = "http://localhost:8081";
  public ALL_RESTAURANTS_URL = `${this.BASE_URL}/restaurants`;


  deleteRestaurant(id: any) :Observable<any>{
   return this.http.delete(this.ALL_RESTAURANTS_URL+"/delete/"+id);
  }

  postFeedback(model: FeedbackViewModel):Observable<any> {
    return this.http.post<any>(this.ALL_RESTAURANTS_URL+"/feedback",model);
  }

  postReservation(name:string,client:Client):Observable<any>{
    return this.http.post<any>(this.ALL_RESTAURANTS_URL+"/reservation/"+name,client);
  }

  constructor(private http:HttpClient) { }
  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.ALL_RESTAURANTS_URL);
  }

}
