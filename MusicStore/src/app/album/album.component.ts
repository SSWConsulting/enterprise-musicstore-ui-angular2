import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Router, OnActivate, RouteSegment, RouteTree} from '@angular/router';

import {Album} from '../models';
import {AlbumService} from '../services/album/album.service';
import {CartService} from '../services/cart/cart.service';
import {AlbumDetailComponent} from './album-detail.component';

@Component({
    moduleId: module.id,
    selector: 'ms-album',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.css'],
    directives: [AlbumDetailComponent]
})
export class AlbumComponent implements OnInit {

    album: Album;
    id: number;
    user: any;

    constructor(private _albumService: AlbumService,
        private _cartService: CartService,
        private _router: Router) {
        this.setUser();
    }

    ngOnInit() {
    }

    routerOnActivate(
        current: RouteSegment,
        prev?: RouteSegment,
        currTree?: RouteTree,
        prevTree?: RouteTree
    ) {
        if (!this.album) {

            let id = parseInt(current.getParam('id'));
            this.getAlbum(id);
        }
    }

    getAlbum(id: number) {
        this._albumService.getAlbum(id)
            .subscribe(album => {
                album.created = new Date(album.created.toString());
                this.album = album;
            },
            e => console.error(`${e}`)
            );
    }

    setUser() {
        let savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            this.user = savedUser;
        };
    }

    addToCart(album: Album) {
        this._cartService.addCartItem(album)
            .subscribe((cart) => {
                console.log(`${album.title} successfully added to cart`);
                this._router.navigate([`/cart`]);
            });
    }

    goToGenre(album: Album) {
        this._router.navigate([`/genres`]);
    }

}
