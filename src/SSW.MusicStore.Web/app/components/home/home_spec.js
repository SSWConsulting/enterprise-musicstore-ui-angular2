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
var testing_1 = require('angular2/testing');
var angular2_1 = require('angular2/angular2');
var dom_adapter_1 = require('angular2/src/core/dom/dom_adapter');
var home_1 = require('./home');
function main() {
    testing_1.describe('Home component', function () {
        testing_1.it('should work', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.overrideTemplate(TestComponent, '<div><home></home></div>')
                .createAsync(TestComponent)
                .then(function (rootTC) {
                var homeDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(homeDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
            });
        }));
    });
    testing_1.describe('Home component', function () {
        testing_1.it('should work', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.overrideTemplate(TestComponent, '<div><home></home></div>')
                .createAsync(TestComponent)
                .then(function (rootTC) {
                var a = 1;
                var b = 2;
                var c = a + b;
                testing_1.expect(c).toEqual(3);
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        angular2_1.Component({ selector: 'test-cmp' }),
        angular2_1.View({ directives: [home_1.HomeCmp] }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
})();
//# sourceMappingURL=home_spec.js.map