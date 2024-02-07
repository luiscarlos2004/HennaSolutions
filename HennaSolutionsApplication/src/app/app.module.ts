import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { NavComponent } from './nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    ClientsComponent,
    MeetingsComponent,
    AppRoutingModule,
    AppComponent,
    RoutesModule,
    FooterComponent
  ],
  providers: [],
  declarations: []
})
export class AppModule { }
