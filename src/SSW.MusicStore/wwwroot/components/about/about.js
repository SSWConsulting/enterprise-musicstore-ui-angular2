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
var angular2_1 = require('angular2/angular2');
var name_list_1 = require('../../services/name_list');
var AboutCmp = (function () {
    function AboutCmp(list) {
        this.list = list;
    }
    AboutCmp.prototype.addName = function (newname) {
        this.list.add(newname.value);
        newname.value = '';
        // prevent default form submit behavior to refresh the page
        return false;
    };
    AboutCmp = __decorate([
        angular2_1.Component({
            selector: 'about',
            template: "\n    <p>\n      For reward, here is a list of awesome computer scientists!\n    </p>\n\n    <p>\n      You want more? Add them yourself!\n    </p>\n    <form (submit)=\"addName(newname)\">\n      <input #newname>\n      <button type=\"submit\">Add</button>\n    </form>\n    <ul>\n      <li *ng-for=\"#name of list.get()\">{{name}}</li>\n    </ul>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [name_list_1.NameList])
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiXSwibmFtZXMiOlsiQWJvdXRDbXAiLCJBYm91dENtcC5jb25zdHJ1Y3RvciIsIkFib3V0Q21wLmFkZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFFN0QsMEJBQXVCLDBCQUEwQixDQUFDLENBQUE7QUFFbEQ7SUFxQkVBLGtCQUFtQkEsSUFBY0E7UUFBZEMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBVUE7SUFBR0EsQ0FBQ0E7SUFDckNELDBCQUFPQSxHQUFQQSxVQUFRQSxPQUFPQTtRQUNiRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM3QkEsT0FBT0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLDJEQUEyREE7UUFDM0RBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2ZBLENBQUNBO0lBM0JIRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsT0FBT0E7WUFDakJBLFFBQVFBLEVBQUVBLGtXQWVUQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7U0FDOUJBLENBQUNBOztpQkFTREE7SUFBREEsZUFBQ0E7QUFBREEsQ0E1QkEsQUE0QkNBLElBQUE7QUFSWSxnQkFBUSxXQVFwQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWJvdXQvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7TmFtZUxpc3R9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hbWVfbGlzdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Fib3V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIEZvciByZXdhcmQsIGhlcmUgaXMgYSBsaXN0IG9mIGF3ZXNvbWUgY29tcHV0ZXIgc2NpZW50aXN0cyFcbiAgICA8L3A+XG5cbiAgICA8cD5cbiAgICAgIFlvdSB3YW50IG1vcmU/IEFkZCB0aGVtIHlvdXJzZWxmIVxuICAgIDwvcD5cbiAgICA8Zm9ybSAoc3VibWl0KT1cImFkZE5hbWUobmV3bmFtZSlcIj5cbiAgICAgIDxpbnB1dCAjbmV3bmFtZT5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8dWw+XG4gICAgICA8bGkgKm5nLWZvcj1cIiNuYW1lIG9mIGxpc3QuZ2V0KClcIj57e25hbWV9fTwvbGk+XG4gICAgPC91bD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDbXAge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGlzdDogTmFtZUxpc3QpIHt9XG4gIGFkZE5hbWUobmV3bmFtZSk6IGJvb2xlYW4ge1xuICAgIHRoaXMubGlzdC5hZGQobmV3bmFtZS52YWx1ZSk7XG4gICAgbmV3bmFtZS52YWx1ZSA9ICcnO1xuICAgIC8vIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=