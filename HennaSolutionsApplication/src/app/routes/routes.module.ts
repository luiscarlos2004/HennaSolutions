import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../clients/clients.component';
import { MeetingsComponent } from '../meetings/meetings.component';


const appRouter:Routes = [
  { path: '', component: ClientsComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'meetings', component: MeetingsComponent}
  // {
  //   path: '',
  //   component: ClientsComponent,
  //   children: [
  //     { path: 'clients', component: ClientsComponent},
  //     { path: 'meetings', component: MeetingsComponent}
  //   ]
  // }
]
@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class RoutesModule { }
