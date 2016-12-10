import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { AlbumDetailComponent } from './components/album/album.component';
import { AlbumSummary } from './components/album/album-summary.component';
import { AlbumTemplate } from './components/album/album-template.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenreDetailComponent } from './components/genre/genre-detail.component';
import { GenresComponent } from './components/genre/genres.component';
import { LoadingIndicator } from './components/loading/loading.indicator.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { Search } from './components/search/search.component';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AlbumService } from './services/album/album.service';
import { GenreService } from './services/genre/genre.service';
import { CartService } from './services/cart/cart.service';
import { OrderService } from './services/order/order.service';
import { LoadingService } from './services/loading/loading.service';
import { CheckoutService } from './services/checkout/checkout.service';

import { ROUTES } from './route.config';

@NgModule({
    declarations: [
        AppComponent,
        AlbumDetailComponent,
        AlbumSummary,
        AlbumTemplate,
        CartComponent,
        CheckoutComponent,
        DashboardComponent,
        GenreDetailComponent,
        GenresComponent,
        LoadingIndicator,
        LoginComponent,
        OrderComponent,
        Search
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, { useHash: false })
    ],
    providers: [
        ...AUTH_PROVIDERS,
        GenreService,
        AlbumService,
        CartService,
        OrderService,
        CheckoutService,
        LoadingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
