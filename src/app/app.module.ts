import { ApiService } from './services/api.service';
import { favoriteDirective } from './directives/favorite.directive';
import { ItemComponent } from './media/item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './media/list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReservationsComponent } from './reservations/reservations.component';

@NgModule({
  declarations: [
    ItemComponent,
    AppComponent,
    ListComponent,
  favoriteDirective,
  FilterPipe,
  SortingPipe,
  FeedbackComponent,
ReservationComponent,
ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
