import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdCoreModule } from '@angular2-material/core';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdSliderModule } from '@angular2-material/slider';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';

import { AlbumService } from './services/album/album.service';
import { CartService } from './services/cart/cart.service';
import { OrderService } from './services/order/order.service';
import { CheckoutService } from './services/checkout/checkout.service';
import { GenreService } from './services/genre/genre.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';

import {HomeComponent} from './home/home.component';
import {AlbumComponent} from './album/album.component';
import {AlbumSummaryComponent} from './album/album-summary.component';
import {AlbumDetailComponent} from './album/album-detail.component';
import {GenresComponent} from './genres/genres.component';
import {LoginComponent} from './login/login.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {OrdersComponent} from './orders/orders.component';
import {GenreDetailComponent} from './genres/genre-detail/genre-detail.component';

declare var Auth0Lock: any;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumComponent,
    GenresComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent,
    GenreDetailComponent,
    AlbumSummaryComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,

    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdCoreModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,

    routing,
  ],
  providers: [
    AlbumService,
    CartService,
    OrderService,
    CheckoutService,
    GenreService,
    AuthService,
    AuthGuard,
    AUTH_PROVIDERS
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
