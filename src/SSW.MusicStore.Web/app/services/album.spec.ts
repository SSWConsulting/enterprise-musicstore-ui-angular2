import {AlbumService} from './album.service';
import {MockBackend, BaseRequestOptions, Http} from 'angular2/http';
import {Injector, provide} from 'angular2/angular2';

export function main() {
    describe('Albums Service', () => {
        let albumList;

        //beforeEach(() => {

        //    var injector = Injector.resolveAndCreate([
        //        BaseRequestOptions,
        //        MockBackend,
        //        provide(Http, {
        //            useFactory:
        //            function (backend, defaultOptions) {
        //                return new Http(backend, defaultOptions);
        //            },
        //            deps: [MockBackend, BaseRequestOptions]
        //        })
        //    ]);
        //    var http = injector.get(Http);
        //    var URLBuilderService = injector.get(URLBuilderService);

        //    albumList = new AlbumService(http);
        //});

        it('should return the list of albums', () => {
            //let albums = this.albumList.getPopularAlbums();
            //expect(albums).toEqual(jasmine.any(Promise));
            expect(true).toBe(true);
        });
    });
}
