import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {ItemsComponent} from "./home/items/items.component";
import {LandingComponent} from "./landing/landing.component";
import {AdminComponent} from "./home/admin/admin.component";
import {TransactionsComponent} from "./home/transactions/transactions.component";
import {BasketComponent} from "./home/basket/basket.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {ItemDetailsComponent} from "./home/items/item-details/item-details.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      {path: 'shop', component: ItemsComponent, canActivate: [AuthGuardService]},
      {path: 'item-details/:id', component: ItemDetailsComponent,canActivate: [AuthGuardService]},
      {path: 'history', component: TransactionsComponent, canActivate: [AuthGuardService]},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
      {path: 'basket', component: BasketComponent, canActivate: [AuthGuardService]}
    ]
  },
  {path: 'landing', component: LandingComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
