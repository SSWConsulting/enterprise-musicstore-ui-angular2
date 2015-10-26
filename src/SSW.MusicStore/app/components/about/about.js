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
            templateUrl: './components/about/about.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [name_list_1.NameList])
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;
//# sourceMappingURL=about.js.map