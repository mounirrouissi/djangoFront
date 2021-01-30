import { Festival } from '../pojos/Festival';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackViewModel } from '../feedback/feedback.component';
import { Client } from '../pojos/Client';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  getAllReservations():Observable<Client[]> {
    return this.http.get<Client[]>(this.BASE_URL + '/reservations');
  }
  private BASE_URL = "http://localhost:8000";
  public ALL_FESTIVALS_URL = `${this.BASE_URL}/festivals/`;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  deleteFestival(id: any) :Observable<any>{
   return this.http.delete(this.ALL_FESTIVALS_URL+"/delete/"+id);
  }

  postFeedback(model: FeedbackViewModel):Observable<any> {
    return this.http.post<any>(this.ALL_FESTIVALS_URL+"/feedback",model);
  }

  postReservation(name:string,client:Client):Observable<any>{
    return this.http.post<any>(this.ALL_FESTIVALS_URL+"/reservation/"+name,client);
  }

  constructor(private http:HttpClient) { }
  getAllFestivals(): Observable<Festival[]> {
    return this.http.get<Festival[]>(this.ALL_FESTIVALS_URL,{headers: this.httpHeaders});;
  }

}
