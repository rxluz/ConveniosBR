(function(){

    var _template = [
      '<i class="icon {{icon}} placeholder-icon"></i>',
        "<div class='selectBox' ng-click='showSelectModal()'>",
        "<span class='selected'>{{label}}</span>",
        "<span class='selectArrow'>&#9660</span>",
        "<input type='hidden'/>",
        "</div>"
    ].join("\n");

    angular.module('$selectBox', []).directive('selectBox', function () {

        return {
            restrict: 'E',
            require: ['ngModel' ],
            template: _template,
            scope: {
                ngSelectedValue: "=",
                ngTitle: "@",
                ngItemName: "@",
                ngItemId: "@",
                ngData: "@",
                ngPlaceholder: "@",
                ngIcon: "@",
                ngHeaderClass: "@",
                ngSelectChanged: "&"
            },
            controller: ['$scope', '$element', '$ionicModal', '$parse', '$rootScope', function ($scope, $element, $ionicModal, $parse, $rootScope) {

                $scope.ngPlaceholder = ($scope.ngPlaceholder) ? $scope.ngPlaceholder : '';
                $scope.label = $scope.ngPlaceholder;
                //$scope.label = ($scope.ngSelectedValue!=='' && $scope.ngSelectedValue!==false?)

                $scope.icon = $scope.ngIcon;


                $scope.showSelectModal = function () {
                    var val = $parse($scope.ngData);
                    $scope.ngDataObjects = val($scope.$parent);
                    $scope.ngHeaderClass = ($scope.ngHeaderClass) ? $scope.ngHeaderClass : "";
                    $scope.renderModal();
                    $scope.modal.show();
                };

                $scope.closeSelectModal = function () {
                  if($scope.modal)
                    $scope.modal.hide();

                };

                $scope.$on('$destroy', function (id) {
                    if($scope.modal)
                        $scope.modal.remove();
                });

                $scope.$watch('ngPlaceholder', function (newValue, oldValue) {
                    //angular.element($element.children()[0]).children()[0] = newValue;
                });

                $scope.$watch('ngSelectedValue', function (newValue, oldValue) {
                    //console.log('selected value changed from ', oldValue, ' to ', newValue);
                    if(!newValue)
                        $scope.setPlaceholderLabel($scope.ngPlaceholder);
                });

                //console.log($rootScope);

                $scope.renderModal = function () {

                    var inputFilterList='<div class="bar bar-subheader bar-filter"><br><div class="formPage"><form><ion-list><label class="item-input item-floating-label item"><span class="input-label">Procurar</span><i class="icon flaticon-interface placeholder-icon"></i><input type="text" placeholder="Procurar" ng-model="filterField"></label></ion-list></form></div></div>';

                    $scope.modal = $ionicModal.fromTemplate(
                        '<ion-modal-view id="select" >'
                        + '<ion-header-bar class="' + $scope.ngHeaderClass + ' ">'
                        + ' <a ng-click="closeSelectModal()" class="button button-icon icon flaticon-delete"></a>'
                        + '<h1 class="title">' + $scope.ngTitle + '</h1>'
                        + ' <a  class="button button-icon icon '+$scope.icon+ '"></a>'

                        + '</ion-header-bar>'
                        + inputFilterList
                        + '<ion-content class=" has-header-filter">'

                          + '<ion-list>'

                          + '<ion-item  ng-click="clickItem(item);' + '" ng-repeat="item in ngDataObjects | filter:filterField" ng-bind-html="item[\'' + $scope.ngItemName + '\']"></ion-item>'
                          + '</ion-list>'
                        + ' </ion-content>'
                        + '</ion-modal-view>', {
                        scope: $scope,
                        animation: 'slide-in-right',
                        backdropClickToClose : true
                    });
                };

                $scope.clickItem = function (item) {
                    console.log(item);
                    $scope.ngSelectedValue = item[$scope.ngItemId];
                    $scope.label = item[$scope.ngItemName];
                    $scope.closeSelectModal();
                    $scope.ngSelectChanged({selectedValue: $scope.ngSelectedValue});
                };

                $scope.setPlaceholderLabel = function(label) {
                    $scope.label =  label;
                };

                $scope.$on('reset', function(){
                    $scope.setPlaceholderLabel($scope.ngPlaceholder);
                    $scope.ngSelectedValue = null;
                });
            }],
            compile: function ($element, $scope) {
                var input = $element.find('input.selected');
                angular.forEach({
                    'name': $scope.name,
                    'ng-model': $scope.ngSelectedValue
                }, function (value, name) {
                    if (angular.isDefined(value)) {
                        input.attr(name, value);
                    }
                });
            }
        };
    });
//# sourceMappingURL=selectBox.js.map
})();
