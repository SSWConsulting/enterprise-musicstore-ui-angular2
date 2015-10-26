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
var about_1 = require('./about');
var name_list_1 = require('../../services/name_list');
function main() {
    testing_1.describe('About component', function () {
        testing_1.it('should work', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.overrideTemplate(TestComponent, '<div><about></about></div>')
                .createAsync(TestComponent)
                .then(function (rootTC) {
                rootTC.detectChanges();
                var aboutInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
                var aboutDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
                var nameListLen = function () {
                    return aboutInstance.list.names.length;
                };
                testing_1.expect(aboutInstance.list).toEqual(jasmine.any(name_list_1.NameList));
                testing_1.expect(nameListLen()).toEqual(4);
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());
                aboutInstance.addName({ value: 'Minko' });
                rootTC.detectChanges();
                testing_1.expect(nameListLen()).toEqual(5);
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'li')[4].textContent).toEqual('Minko');
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        angular2_1.Component({ bindings: [name_list_1.NameList], selector: 'test-cmp' }),
        angular2_1.View({ directives: [about_1.AboutCmp] }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
})();
//# sourceMappingURL=about_spec.js.map