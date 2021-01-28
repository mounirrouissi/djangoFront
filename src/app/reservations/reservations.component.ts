import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../pojos/Client';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  clients:Client[]=[];

  constructor(private service:ApiService) { }

  ngOnInit(): void {
this.getAllReservations();
  }
  getAllReservations() {
    this.service.getAllReservations().subscribe(
      res=>{this.clients=res ; },
      err=>{"error while looking for clients"}
    );
  }

}
