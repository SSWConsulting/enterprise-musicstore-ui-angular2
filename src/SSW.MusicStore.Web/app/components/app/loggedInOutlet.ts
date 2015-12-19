import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

@Directive({
    selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
        _parentRouter: Router, @Attribute('name') nameAttr: string) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            '': true,
            'login': true,
            'genres': true,
            'genre': true,
            'album': true
        };
    }

    activate(instruction: ComponentInstruction) {
        this.parentRouter.subscribe((value) => {
            if (value.indexOf('/', 0) >= 0) {
                var url = value.substring(0, value.indexOf('/', 0));
            } else {
                url = value;
            }

            if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
                if (url === 'login') {
                    this.parentRouter.navigateByUrl('/');
                } else {
                    this.parentRouter.navigateByUrl('/login');
                }
            }
            scroll(0, 0);
        });

        return super.activate(instruction);
    }
}
