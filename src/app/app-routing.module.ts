import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'customer/:id', component: CustomerComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
