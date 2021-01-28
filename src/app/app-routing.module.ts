import { ReservationsComponent } from './reservations/reservations.component';
import { ListComponent } from './media/list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"home",component:ListComponent},
    {path:"feedBack",component:FeedbackComponent},
  {path:"reserve/:id",component:ReservationComponent},
  {path:'reservations',component:ReservationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
