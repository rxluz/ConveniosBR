var lat=false;
var lng=false;

app.run(function($rootScope, $ionicBackdrop, $ionicSideMenuDelegate, $window, $state, $timeout, $ionicPopup, $ionicModal, $http, $location, $cookies, $ionicLoading, $localstorage, $ionicScrollDelegate, $anchorScroll, $ionicTabsDelegate, $cordovaGeolocation, $ionicPlatform, $cordovaInAppBrowser){


  $rootScope.popupIsOpen=false;


  $rootScope.acb={
    showAlert: true,
    disable: function(){
      alert('Os recursos de acessibilidade foram desativados, para ativar eles novamente feche o Urban e abra novamente ou configure os mesmos em Menu -> Opções do usuário -> Edital meu perfil');
      forcevoiceover=false;
      voiceover=false;
    },

    enable: function(){
      alert('Com os recursos de acessibilidade ativados algumas interfaces podem conter alterações visuais para serem compatíveis com leitores de tela');
      voiceover=true;
      forcevoiceover=true;
    },
    voiceover: function(){
      return (forcevoiceover===true?true:voiceover);
    },
    voice: function(iName){
      //console.log(iName);
      //alert(0);

      recognition = new SpeechRecognition();
      recognition.lang = 'pt-PT';
      recognition.onresult = function(event) {
          if (event.results.length > 0) {
            $rootScope.$apply(function(){
              //document.getElementById(iName).value =
              $rootScope.header.search.term=event.results[0][0].transcript;
            });
              //document.getElementById(inputName).focus();
              //searchField.form.submit();
          }
      };

      //inputName=iName;
      recognition.start();
    },

    search: {
      goTo: function(name){
        $rootScope.acb.search.clear();

        if(name=='places_near'){
          $rootScope.acb.search.places_near=true;
        }

        if(name=='places_saved'){
          $rootScope.acb.search.places_saved=true;
        }


      },

      clear: function(){
        $rootScope.acb.search.places_saved=false;
        $rootScope.acb.search.places_near=false;

      },

      places_saved: false,
      places_near: false,

      isHidden: function(name){
        if(name == 'places_near' && $rootScope.acb.search.places_near===true){
          return false;
        }

        if(name == 'places_saved' && $rootScope.acb.search.places_saved===true){
          return false;
        }

        return true;
      }
    }
  };


  $rootScope.urlExternal=function(url){
    window.open(url, '_system', 'location=no');
  };

  $ionicPlatform.ready(function() {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
      }, function(err) {
        // error
      });

    var watchOptions = {
      timeout : 3000,
      enableHighAccuracy: false // may cause errors if true
    };

    var watch = $cordovaGeolocation.watchPosition(watchOptions);
    watch.then(
      null,
      function(err) {
        // error
      },
      function(position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
    });
  });


  $rootScope.location={
    init: function(){
      $rootScope.$watch(function(){
        return lat+lng;
      }, function(){
        $rootScope.location.lat=lat;
        $rootScope.location.lng=lng;
      });
    },
    lat: false,
    lng: false
  };

  $rootScope.location.init();


  $rootScope.go = function(url){
    $location.path(url);
  };


  $rootScope.scrollInfos={
    top: 0,
    init: function(){
      $rootScope.$apply(function(){
        $rootScope.scrollInfos.top=$ionicScrollDelegate.getScrollPosition().top;
      });
    }
  };

  $rootScope.map= {
      style: {
        data: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":1}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#50a5d1"},{"saturation":50},{"gamma":0}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"color":"#333333"},{"weight":0.5}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"saturation":50},{"gamma":1}]}]
      }
  },

  $rootScope.loginInfos = {
    isLogged: $localstorage.get('loggedin') == "true" ? true : false,
    isOpen: false,
    name: $localstorage.get('user_name', false),
    email: $localstorage.get('user_email', false),
    telephone: $localstorage.get('user_telephone', false),
    photo: function(){
      return ($localstorage.get('user_photo', false)==="false" || $localstorage.get('user_photo', false)===false || $localstorage.get('user_photo', false)===undefined ? "img/user_avatar.jpg" : $localstorage.get('user_photo'));
    },
    clear: function(){
      $localstorage.set('loggedin', false);
      $localstorage.set('key_auth', false);
      $localstorage.set('user_name', false);
      $localstorage.set('user_type', false);
      $localstorage.set('user_email', false);
      $localstorage.set('user_telephone', false);
      $localstorage.set('user_photo', false);
      $localstorage.set('user_facebook_id', false);
      $localstorage.setObject('facebookInfos', false);
      $localstorage.set('accessToken', false);


      $rootScope.loginInfos.isLogged=false;
      $rootScope.loginInfos.name=false;
      $rootScope.loginInfos.email=false;
      $rootScope.loginInfos.telephone=false;
      //alert('oi');
      return true;
    }
  };

  //var test11e=$localstorage.get('user_nam11e');

  ////console.log(test11e+ "1");


  Waves.init();

  $rootScope.$watch(function(){
    Waves.attach('.button', ['waves-float', 'waves-button']);
    //Waves.attach('.button-icon', ['waves-float']);
  });


  $rootScope.notification = {
    display: false,
    hideOut: false,
    button: {
      display: true,
      text: "Fechar",
      action: function(){
        $rootScope.notification.hide(0);
      }
    },
    message: '',
    show: function(m, timeout){
      timeout=typeof timeout !== 'undefined' ? timeout: 5000;
      //console.log(typeof m);

      if($rootScope.acb.voiceover()===true){
        alert(typeof m=='object' ? m.message : m);
        return false;
      }

      if(typeof m=='object'){
        $rootScope.notification.message=m.message;
        $rootScope.notification.button.display=m.button.display;
        $rootScope.notification.button.text=m.button.text;
        $rootScope.notification.button.action=m.button.action;
      }else{
        $rootScope.notification.message=m;
        $rootScope.notification.button={
          display: true,
          text: "Fechar",
          action: function(){
            $rootScope.notification.hide(0);
          }
        };
      }

      $rootScope.notification.display=false;

      $timeout(function(){
        $rootScope.notification.display=true;
        $rootScope.notification.hideOut=false;

        if($rootScope.notification.hiding===true){
          $rootScope.notification.hiding=false;
          if(timeout>0){
            $timeout(function(){
              $rootScope.notification.hide(timeout);
            }, 5000);
          }
        }else{
          if(timeout>0){
            $rootScope.notification.hide(timeout);
          }
        }

      }, 300);

    },

    hiding: false,
    hide: function(timeout){
      $rootScope.notification.hiding=true;

      $timeout(function(){
        if($rootScope.notification.hiding===true){
          $rootScope.notification.hideOut=true;
          $timeout(function(){
            $rootScope.notification.display=false;
          }, 350);
        }
      }, timeout);
    }
  };


  $rootScope.online = navigator.onLine;
  $window.addEventListener("offline", function() {
    $rootScope.$apply(function() {
      $rootScope.online = false;
    });
  }, false);

  $window.addEventListener("online", function() {
    $rootScope.$apply(function() {
      $rootScope.online = true;
    });
  }, false);

  $rootScope.req = function(url, dto, thenf) {
    //para definir a url da api analisa a $location.absUrl(); para saber se a aplicação é localhost ou online, se for online aciona a api.trabox, do contrario aciona a localhost:8888

    if(!$rootScope.online) {
        $rootScope.notification.show("O seu celular está offline", 0);
        return false;
    }
    document.activeElement.blur();

    var absUrl= $location.absUrl();
    var url_base="http://api.appock.co/urban/";

    key=(typeof $localstorage.get('loggedin')!='undefined'?$localstorage.get('key_auth'):false);
    key=(key=="false"?false:key);

    if(key){
        dto.key_auth=key;
    }

    $ionicLoading.show({
      templateUrl:"templates/loading.html",
      noBackdrop: true,
      duration: 8000
    });

    $http({
       url: url_base+url,
       method: "POST",
       data: dto,
       headers: {'Content-Type': 'text/plain'}
    }).then(function(response) {
      $ionicLoading.hide();
       var status_invalid=["invalid", "not_allowed", "fatal_error", "user_notfound", "invalid_key"];
       var error=false;
       for (i = 0; i < status_invalid.length && !error; i++) {
         if (status_invalid[i] === response.data.status) {
           error = true;
         }
       }

       if(error){
         //$rootScope.showActionToast('Ocorreu um erro na sua solicitação', 5000);
         if(url_base.indexOf("localhost") > -1){
           //console.log(response.data);
         }
         return false;
       }

       if(typeof response.data.key_auth=='string'){
         $localstorage.set('loggedin', true);
         $localstorage.set('key_auth', response.data.key_auth);
       }

       if(typeof response.data.key_user_type=='string'){
         $localstorage.set('user_type', response.data.key_user_type);
       }

       if(typeof response.data.user_name=='string'){
         $localstorage.set('user_name', response.data.user_name);
         $rootScope.loginInfos.name=response.data.user_name;
       }

       if(typeof response.data.user_email=='string'){
         $localstorage.set('user_email', response.data.user_email);
         $rootScope.loginInfos.email=response.data.user_email;
       }

       if(typeof response.data.user_telephone=='string'){
         $localstorage.set('user_telephone', response.data.user_telephone);
         $rootScope.loginInfos.telephone=response.data.user_telephone;
       }

       if(typeof response.data.user_facebook_id=='string'){
         $localstorage.set('user_photo', "https://graph.facebook.com/"+ response.data.user_facebook_id+"/picture?width=300");

         $localstorage.set('user_facebook_id', response.data.user_facebook_id);
       }


       if(response.data.status=='blocked'){
         $rootScope.notification.show("O seu IP não está autorizado a acessar essa aplicação", 0);
         $state.go("base.home");
         return false;
       }

       if(response.data.status=='not_allowed_type'){
         $rootScope.notification.show('Você não pode acessar essa área', 0);
         $state.go("base.home");
         return false;
       }

       if(response.data.status=='not_logged'){
         $rootScope.notification.show('Faça login p/ acessar', 0);
         $state.go("base.home");
         return false;
       }

       if(response.data.status=='fatal_error_key'){
         //$rootScope.login.logout.success();
         $rootScope.notification.show('Faça login novamente', 0);
         $state.go("base.home");
         return false;
       }

       thenf(response.data);
    });

  };

  $rootScope.windowInfo={
    height: window.screen.height,
    width: window.screen.width
  };

  $rootScope.menu = {
    init: function(){
      $rootScope.menu.left.init();
      $rootScope.menu.bottom.init();
    },

    footer: {
      show: function(options){
        $rootScope.menu.footer.isVisible=true;
        $rootScope.menu.footer.options=options;
        $rootScope.menu.footer.style.height=(55+(55*options.length))+"px";
        //console.log(options.length);

      },

      options:[],

      hide: function(){
        $rootScope.menu.footer.isVisible=false;
      },

      style: {
        height: "50px"
      },

      isVisible: false
    },
    left: {
      init: function(){
        //alert('oi');
        $rootScope.$watch(
          function () { return $rootScope.menu.left.isVisible();},
          function (isOpen) {
            if (isOpen){
              $rootScope.header.isVisible=false;
              //console.log("open");
            }else{
              $rootScope.header.isVisible=true;
            }
          }
        );

        $rootScope.header.buttons.menu=true;
      },

      hide: function(){
        $rootScope.header.buttons.menu=false;
      },


      show: function(){
        $ionicSideMenuDelegate.toggleLeft();
      },

      isVisible: function(){
        return $ionicSideMenuDelegate.isOpenLeft() || false;
      },

      isVisibleLogin: false,

      test: function(){
        alert('ola mundo');
      }

    },
    bottom: {
      init: function(){
        //alert('oi');

        $rootScope.menu.bottom.status='closed';
        $rootScope.header.buttons.bottom=true;
        $rootScope.$watch(
          function () { return $rootScope.menu.bottom.status;},
          function (value) {
            ////console.log(value);
            if(value=='open'){
              $ionicBackdrop.retain();
            }else{
              $ionicBackdrop.release();
            }
            ////console.log(value);
          }
        );

        //$rootScope.menu.bottom.isVisible=true;
        //$rootScope.header.buttons.menu=true;
      },

      hide: function(){
        $rootScope.header.buttons.bottom=true;
        //$rootScope.header.buttons.bottom=true;
      },

      visible: false,

      isVisible: function(){
        //console.log();

        if($rootScope.header.buttons.bottom===true && $rootScope.menu.left.isVisible()===false && $rootScope.notification.display===false && $rootScope.header.search.isVisible===false && $ionicTabsDelegate.selectedIndex()===0){
          return true;
        }

        return false;
      },
      status: 'closed'
    }
  };


  $rootScope.header = {
    init: function(){
      $rootScope.header.isVisible=true;
    },

    config: function(options){
      $rootScope.header.isVisible=typeof options.visible !== 'undefined'?options.visible:false;
      ////console.log($rootScope.header.isVisible);

      $rootScope.header.buttons.search=typeof options.search !== 'undefined'?options.search:false;

      $rootScope.header.buttons.filter=typeof options.filter !== 'undefined'?options.filter:false;

      $rootScope.header.buttons.back=typeof options.back !== 'undefined'?options.back:false;
      $rootScope.header.buttons.share=typeof options.share !== 'undefined'?options.share:false;

      $rootScope.header.buttons.menu=typeof options.menu !== 'undefined'?options.menu:false;

      if($rootScope.header.buttons.menu){
        $rootScope.menu.init();
      }

      $rootScope.header.buttons.bottom=typeof options.bottom !== 'undefined'?options.bottom:false;

      $rootScope.header.title=typeof options.title !== 'undefined'?options.title:false;

      $rootScope.header.class=typeof options.class !== 'undefined'?options.class:false;

      $rootScope.header.classAdd=typeof options.classAdd !== 'undefined'?options.classAdd:false;

      $rootScope.menu.bottom.status='closed';
      $rootScope.header.search.isVisible=false;
    },

    buttons: {
      search: false,
      filter: false,
      back: false,
      menu: false,
      bottom: false
    },

    isVisible: false,
    title: '',
    class: 'bar-calm',

    filter: {
      start: function(){
        $rootScope.popup.content.start('templates/base.filter.html', $rootScope);
        $rootScope.header.buttons.bottom=false;
      },

      advanced: {
        start: function(modal){
          //alert('ola mundo');
          modal.close.start();
          $timeout(function(){
            $rootScope.popup.content.start('templates/base.filter.advanced.html', $rootScope);
          }, 500);

        },

        close: function(modal){
          modal.close.start();
          $timeout(function(){
            $rootScope.header.filter.start();

          }, 500);
        },

        data: []

      },

      isValid: function(filterForm){
        return true;
      },

      save: {
        start: function(filterForm, modal){
          if(!$rootScope.header.filter.isValid(filterForm)){
            return false;
          }

          if($state.current.name=='base.performer'){
            $rootScope.performer.start();
            modal.close.start();
          }

          if($state.current.name=='base.bookmarks'){
            $rootScope.bookmarks.start();
            modal.close.start();
          }
        }
      },

      data: []
    },

    search: {
      init_from_modal: function(){
        //alert('ola mundo');
        $rootScope.popup.content.hide();
        $timeout(function(){
          $rootScope.header.search.init(false);
        }, 1000);

      },
      init: function(showReviewTip, showAddTip){
        $rootScope.header.search.isVisible=true;
        $rootScope.header.search.tip.review.show=showReviewTip;
        $rootScope.header.search.showResults=false;
        $ionicSideMenuDelegate.toggleLeft(false);
        $rootScope.menu.bottom.status="closed";
        $rootScope.header.search.tip.add.show=typeof showAddTip !== 'undefined' ? showAddTip:false;

      },

      term: '',

      tip: {
        review: {
          show: false,
          text: 'Digite o nome do local que você deseja avaliar'
        },

        add: {
          show: false,
          text: 'Digite o nome do local que você deseja adicionar ao mapa'
        },

        isVisible: function(){
          return $rootScope.header.search.tip.review.show || $rootScope.header.search.tip.add.show;
        },

        hide: function(){
          $rootScope.header.search.tip.review.show=false;
          $rootScope.header.search.tip.add.show=false;
        },
        text: function(){
          return (
            $rootScope.header.search.tip.review.show ? $rootScope.header.search.tip.review.text :
            (
              $rootScope.header.search.tip.add.show ?
              $rootScope.header.search.tip.add.text : ''
            )
          );

        }
      },

      results: {
        init: function(){
          $rootScope.header.search.showResults=true;
          $rootScope.header.search.tip.review.show=false;
          //alert('oo');
        }
      },

      hide: function(){
        $rootScope.header.search.visible=false;
      },

      change: function(){

        if($rootScope.header.search.isVisible===true){
          $rootScope.header.search.isVisible=false;
          $rootScope.header.search.showResults=false;
        }else{
          //para abrir a busca fecha o filtro e o email
          $rootScope.header.search.isVisible=true;
          $rootScope.header.search.showResults=false;
          $ionicSideMenuDelegate.toggleLeft(false);
        }

      },

      isVisible: false,
      showResults: false
    }

  };


  $rootScope.$watch(function(){
    return $rootScope.header.search.term;
  }, function(newValue){
    if(newValue===''){
      $rootScope.header.search.showResults=false;
    }

  });

  $rootScope.isState=function(state){
    return $state.current.name==state?true:false;
  };

  $rootScope.w = {
    width: $window.innerWidth,
    height: $window.innerHeight
  };


  $rootScope.validate = {
    isFilled: function(field_list){
      for(var x in field_list){
        if(field_list[x]===false || field_list[x]===''){
          return false;
        }
      }

      return true;
    }

  };

  $rootScope.changeState=function(){
    if($rootScope.acb.voiceover()===true){
      if(typeof window.MobileAccessibility === 'undefined')
      {
        return true;
      }
      MobileAccessibility.postNotification(
        MobileAccessibilityNotifications.SCREEN_CHANGED,
        '',
        function(info) {
            if (info) {
                //console.log("Screen Reader announced \"" + info.stringValue + "\" success : " + info.wasSuccessful);
            }
        }
      );
    }
  };

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $timeout(function(){
      $rootScope.changeState();
    }, 500);
  });

  $rootScope.popup = {
    alert: {
      show: function(title, message, tn){
        // An alert dialog
        var alertPopup;
        if(typeof message.url === 'undefined'){
          if($rootScope.acb.voiceover()===true){
            alert(title+" \n "+message);
          }else{
            alertPopup = $ionicPopup.alert({
              title: title,
              template: message
            });
          }
        }else{
          alertPopup = $ionicPopup.alert({
            title: title,
            templateUrl: message.url
          });
        }

        alertPopup.then(function(res){tn(res);});
        $rootScope.changeState();
      }
    },
    content: {
      start: function(templateUrl, $scope){
        //console.log(templateUrl);
        var ionicModal= $ionicModal.fromTemplateUrl(templateUrl, {
          scope: $scope,
          backdropClickToClose : true,
          animation: 'none'
        }).then(function(modal) {
          $rootScope.modal = modal;
          $rootScope.modal.show();
          $rootScope.changeState();

          $rootScope.modal.close={
            start: function(){
              $rootScope.modal.close.class='modal-close';
              $rootScope.header.buttons.bottom=true;
              $timeout(function(){
                $rootScope.modal.hide();
              }, 500);
            },
            class: ''
          };
        });
      },

      hide: function(){
        $rootScope.changeState();
        $state.go('base.home');
      }

    }
  };


  $rootScope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  1,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };

      $rootScope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };
})

.config(function($ariaProvider){
  // $ariaProvider.config({
  //   ariaValue: true,
  //   tabindex: true,
  //   bindKeypress: true,
  //   bindRoleForClick: true
  // });
})
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.views.transition('ios');
    $ionicConfigProvider.tabs.style('standard').position('top');
    $ionicConfigProvider.navBar.alignTitle('center').positionPrimaryButtons('left');
    $ionicConfigProvider.platform.android.scrolling.jsScrolling(false);

}).factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  };
}])
.filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        };
}]);

// .config(function($sceDelegateProvider) {
//    $sceDelegateProvider.resourceUrlWhitelist([
//      // Allow same origin resource loads.
//      'self',
//      // Allow loading from our assets domain.  Notice the difference between * and **.
//      'http://www.portalsucesso.com.br/**']);
//
//
// });
