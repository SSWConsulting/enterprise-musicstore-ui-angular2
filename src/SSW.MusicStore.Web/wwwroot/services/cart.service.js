var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var config_1 = require('../config');
var CartService = (function () {
    function CartService(_http) {
        this._http = _http;
        this.jwt = localStorage.getItem('jwt');
        this.authHeaders = new http_1.Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.jwt
        });
    }
    CartService.prototype.postCartItems = function (cartItems) {
        var promise = this._http.post(config_1.API_BASE + "/cart", cartItems, {
            headers: this.authHeaders
        })
            .map(function (response) { return response.json(); }).toPromise()
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (cartItems) {
            return cartItems;
        });
        return promise;
    };
    CartService.prototype.getCartItems = function () {
        var promise = this._http.get(config_1.API_BASE + "/cart", {
            headers: this.authHeaders
        })
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (cartItems) {
            return cartItems;
        });
        return promise;
    };
    CartService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CartService);
    return CartService;
})();
exports.CartService = CartService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6WyJDYXJ0U2VydmljZSIsIkNhcnRTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQ2FydFNlcnZpY2UucG9zdENhcnRJdGVtcyIsIkNhcnRTZXJ2aWNlLmdldENhcnRJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMseUJBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFDN0MsdUJBQXVCLFdBQVcsQ0FBQyxDQUFBO0FBRW5DO0lBUUlBLHFCQUFtQkEsS0FBV0E7UUFBWEMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBTUE7UUFDMUJBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3ZDQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxjQUFPQSxDQUFDQTtZQUMzQkEsUUFBUUEsRUFBRUEsa0JBQWtCQTtZQUM1QkEsY0FBY0EsRUFBRUEsa0JBQWtCQTtZQUNsQ0EsZUFBZUEsRUFBRUEsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0E7U0FDeENBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRURELG1DQUFhQSxHQUFiQSxVQUFjQSxTQUFTQTtRQUVuQkUsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUJBQVFBLEdBQUdBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBO1lBQ3pEQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxXQUFXQTtTQUM1QkEsQ0FBQ0E7YUFDR0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsUUFBYUEsSUFBS0EsT0FBQUEsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsRUFBRUE7YUFDbkRBLEdBQUdBLENBQUNBLFVBQUNBLFFBQWFBLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQ25EQSxJQUFJQSxDQUFDQSxVQUFDQSxTQUFvQkE7WUFDdkJBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBO1FBQ3JCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUFFREYsa0NBQVlBLEdBQVpBO1FBQ0lHLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLGlCQUFRQSxHQUFHQSxPQUFPQSxFQUFFQTtZQUM3Q0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsV0FBV0E7U0FDNUJBLENBQUNBO2FBQ0dBLEdBQUdBLENBQUNBLFVBQUNBLFFBQWFBLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBLFNBQVNBLEVBQUVBO2FBQ25EQSxJQUFJQSxDQUFDQSxVQUFDQSxTQUFvQkE7WUFDdkJBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBO1FBQ3JCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUNuQkEsQ0FBQ0E7SUF2Q0xIO1FBQUNBLHFCQUFVQSxFQUFFQTs7b0JBd0NaQTtJQUFEQSxrQkFBQ0E7QUFBREEsQ0F4Q0EsQUF3Q0NBLElBQUE7QUF2Q1ksbUJBQVcsY0F1Q3ZCLENBQUEiLCJmaWxlIjoic2VydmljZXMvY2FydC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXJ0SXRlbSwgQ2FydEl0ZW1zfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtBUElfQkFTRX0gZnJvbSAnLi4vY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlIHtcbiAgICBjYXJ0SXRlbTogQ2FydEl0ZW1bXTtcbiAgICBjYXJ0SXRlbXM6IENhcnRJdGVtcztcbiAgICBhdXRoSGVhZGVyczogYW55O1xuICAgIGVycm9yOiBhbnk7XG4gICAgand0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2h0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5qd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XG4gICAgICAgIHRoaXMuYXV0aEhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ2JlYXJlciAnICsgdGhpcy5qd3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9zdENhcnRJdGVtcyhjYXJ0SXRlbXMpOiBQcm9taXNlPENhcnRJdGVtcz4ge1xuXG4gICAgICAgIGxldCBwcm9taXNlID0gdGhpcy5faHR0cC5wb3N0KEFQSV9CQVNFICsgYC9jYXJ0YCwgY2FydEl0ZW1zLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmF1dGhIZWFkZXJzXG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5qc29uKCkpLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5qc29uKCkpLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigoY2FydEl0ZW1zOiBDYXJ0SXRlbXMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FydEl0ZW1zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGdldENhcnRJdGVtcygpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLl9odHRwLmdldChBUElfQkFTRSArIGAvY2FydGAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuYXV0aEhlYWRlcnNcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmpzb24oKSkudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKChjYXJ0SXRlbXM6IENhcnRJdGVtcykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYXJ0SXRlbXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9