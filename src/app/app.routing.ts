import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'album/:id', component: AlbumComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);