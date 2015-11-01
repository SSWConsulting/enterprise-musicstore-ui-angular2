import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/angular2';
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
            let url = value.substring(0, value.indexOf('/', 0));
            if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
                this.parentRouter.navigateByUrl('/login');
            }
        });

        return super.activate(instruction);
    }
}
