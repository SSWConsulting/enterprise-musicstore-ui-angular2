
import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Routes} from '../../route.config';
import {Album} from '../../models';
import {AlbumService} from '../../services/album/album.service';
import {CartService} from '../../services/cart/cart.service';
import {AlbumTemplate} from './album-template.component';

@Component({
    selector: 'album-detail',
    templateUrl: 'app/components/album/album.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, AlbumTemplate]
})
export class AlbumDetailComponent implements OnInit {
    album: Album;
    id: number;
    user: any;
    subscription: any;

    constructor(private _albumService: AlbumService,
        private _cartService: CartService,
        private _route: ActivatedRoute, private _router: Router) {
            this.setUser();
    }

    ngOnInit() {
        if (!this.album) {
            this.subscription = this._route
                .params
                .subscribe((params) => {
                    let id = +params['id'];

                    this.id = parseInt(id.toString());
                    this.getAlbum(this.id);
                });
        }
    }

    getAlbum(id: number) {
        this._albumService.getAlbum(id)
            .subscribe(album => {
                album.created = new Date(album.created.toString());
                this.album = album;
            },
            e => toastr.error(`${e}`)
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
                toastr.success(`${album.title} successfully added to cart`);
                this._router.navigate([`/${Routes.cart.as}`]);
            }
            );
    }

    goToGenre(album: Album) {
        this._router.navigate([`/${Routes.genres.as}`]);
    }

}
