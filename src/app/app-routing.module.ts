import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ItemsComponent} from './home/items/items.component';
import {LandingComponent} from './landing/landing.component';
import {AdminComponent} from './home/admin/admin.component';
import {TransactionsComponent} from './home/transactions/transactions.component';
import {BasketComponent} from './home/basket/basket.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ItemDetailsComponent} from './home/items/item-details/item-details.component';
import {AdminAuthGuardService} from './services/admin-auth-guard.service';
import {RegisterComponent} from './landing/register/register.component';
import {LoginComponent} from './landing/login/login.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      {path: '', component: ItemsComponent, canActivate: [AuthGuardService]},
      {path: 'item-details/:id', component: ItemDetailsComponent, canActivate: [AuthGuardService]},
      {path: 'history', component: TransactionsComponent, canActivate: [AuthGuardService]},
      {path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuardService]},
      {path: 'basket', component: BasketComponent, canActivate: [AuthGuardService]}
    ]
  },
  {path: 'landing', component: LandingComponent, children: [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
  ]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
