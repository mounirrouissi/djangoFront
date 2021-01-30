import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../pojos/Client';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  clients:Client[]=[

    {
      "places": 1,
      "category": "Full",
      "name":"Sami",
      "city": "Tunis",

    },

    {
      "places":1,
      "category": "Available",
      "name":"Kamel",
      "city": "Manouba",

    },

    {
      "places": 2,
      "category": "Full",
      "name":"Karim",
      "city": "Manouba",

    },

    {
      "places": 1,
      "category": "minivan",
      "name":"Lotfi",
      "city": "Manouba",

    },
  ];

  constructor(private service:ApiService) { }

  ngOnInit(): void {
/* this.getAllReservations();
 */  }
  getAllReservations() {
    this.service.getAllReservations().subscribe(
      res=>{this.clients=res ; },
      err=>{"error while looking for clients"}
    );
  }

}
