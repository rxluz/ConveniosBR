
var app=angular.module('ionicApp', ['ionic', 'ng-mfb', '$selectBox', 'ui.utils.masks', "ngCookies", 'ngMap', 'ionic-ratings', 'ngCordova', 'ngAria'])

.constant("FACEBOOK_APP_ID", '660552810751144')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('base', {
      url: "/base",
      abstract: true,
      templateUrl: "templates/base.html",
      controller: "Base"
    })
    .state('base.home', {
      url: "/home",
      views: {
        'baseContent': {
          templateUrl: "templates/base.home.html",
          controller: 'Base'
        }
      }
    })
    .state('base.search', {
      url: "/search",
      views: {
        'baseContent': {
          templateUrl: "templates/base.search.html",
          controller: 'Data'
        }
      }
    })
    .state('others', {
      url: "/others",
      abstract: true,
      templateUrl: "templates/popup.content.html",
      controller: "Others"
    })
    .state('others.onboarding', {
      url: "/onboarding",
      views: {
        'popupContent': {
          templateUrl: "templates/others.onboarding.html",
          controller: 'Others'
        }
      }
    })
    .state('others.about', {
      url: "/about",
      views: {
        'popupContent': {
          templateUrl: "templates/others.about.html",
          controller: 'Others'
        }
      }
    })
    .state('others.about_list', {
      url: "/about_list",
      views: {
        'popupContent': {
          templateUrl: "templates/others.about.list.html",
          controller: 'Others'
        }
      }
    })

    .state('others.feedback', {
      url: "/feedback",
      views: {
        'popupContent': {
          templateUrl: "templates/others.feedback.html",
          controller: 'Others'
        }
      }
    })
    .state('data', {
      url: "/data",
      abstract: true,
      templateUrl: "templates/popup.content.html",
      controller: "Data"
    })
    .state('data.local', {
      url: "/local/:id",
      views: {
        'popupContent': {
          templateUrl: "templates/data.local.html",
          controller: 'Data'
        }
      }
    })
    .state('user', {
      url: "/user",
      abstract: true,
      templateUrl: "templates/popup.content.html",
      controller: "User"
    })
    .state('user.signup', {
      url: "/signup",
      views: {
        'popupContent': {
          templateUrl: "templates/user.signup.html",
          controller: 'User'
        }
      }
    })
    .state('user.signin', {
      url: "/signin",
      views: {
        'popupContent': {
          templateUrl: "templates/user.signin.html"
        }
      }
    })
    .state('user.edit', {
      url: "/edit",
      views: {
        'popupContent': {
          templateUrl: "templates/user.edit.html"
        }
      }
    })
    .state('user.places', {
      url: "/places",
      views: {
        'popupContent': {
          templateUrl: "templates/user.places.html"
        }
      }
    })

    .state('user.reviews', {
      url: "/reviews",
      views: {
        'popupContent': {
          templateUrl: "templates/user.reviews.html"
        }
      }
    })
    .state('user.password', {
      url: "/password",
      views: {
        'popupContent': {
          templateUrl: "templates/user.password.html"
        }
      }
    })
    .state('user.cancel', {
      url: "/cancel",
      views: {
        'popupContent': {
          templateUrl: "templates/user.cancel.html"
        }
      }
    });


    $urlRouterProvider.otherwise("/others/onboarding");


})

.directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {
      $timeout(function() {
        //alert('oi');
        console.log(element);
        var f=element[0].id;
        //document.getElementById(f).focus();
        element[0].focus();
        //cordova.plugins.Keyboard.show();

      },1750);
   }
 };
})
.directive("compareTo", function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});
