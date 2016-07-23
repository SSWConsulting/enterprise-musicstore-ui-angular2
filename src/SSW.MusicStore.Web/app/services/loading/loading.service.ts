import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

export class LoadingService {
    loading$: Observable<{}>;
    private _observer: Observer<{}>;

    constructor() {
        this.loading$ = new Observable(observer => this._observer = observer).share();
    }

    toggleLoadingIndicator(name) {
        if (this._observer) {
            this._observer.next(name);
        }
    }
}