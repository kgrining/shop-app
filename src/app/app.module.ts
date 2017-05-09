import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ItemsComponent} from './home/items/items.component';
import {ItemService} from './services/item.service';
import {LandingComponent} from './landing/landing.component';
import {AdminComponent} from './home/admin/admin.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TransactionsComponent} from './home/transactions/transactions.component';
import {BasketComponent} from './home/basket/basket.component';
import {ItemComponent} from './home/items/item/item.component';
import {BasketService} from './services/basket.service';
import { BasketItemComponent } from './home/basket/basket-item/basket-item.component';
import { OnlyNumbersDirective } from './shared/only-numbers.directive';
import { TransactionItemComponent } from './home/transactions/transaction-item/transaction-item.component';
import {TransactionService} from './services/transaction.service';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import { ItemDetailsComponent } from './home/items/item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    LandingComponent,
    AdminComponent,
    NavbarComponent,
    TransactionsComponent,
    BasketComponent,
    ItemComponent,
    BasketItemComponent,
    OnlyNumbersDirective,
    TransactionItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ItemService, BasketService, TransactionService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
