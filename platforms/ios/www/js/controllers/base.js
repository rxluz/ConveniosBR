app.controller('Base', function($scope, $ionicSideMenuDelegate, $rootScope, $ionicBackdrop, $state, $ionicModal, $timeout, $ionicScrollDelegate, $ionicPopover) {
  $scope.$watch(function(){return $state.current.name;}, function(v){
    $scope.view(v);
  });

  $ionicSideMenuDelegate.canDragContent(false);

  $rootScope.route = {
    start: function(){
 
      $ionicSideMenuDelegate.toggleLeft(false);
      $rootScope.menu.bottom.status="closed";
      $rootScope.header.buttons.bottom=false;

      $rootScope.popup.content.start('templates/base.header.route.html', $rootScope);
    },

    close: function(){
      $rootScope.modal.close.start($rootScope.modal);
    }
  };

  $scope.home = {
    start: function(){
      // var map;
      // function initialize() {
      // 	var mapOptions = {
      // 		zoom: 11,
      // 		//center: new google.maps.LatLng(50.91643484196314, -114.15664205322264),
      // 		styles: style_array_here
      // 	};
      // 	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      // }
      //
      // google.maps.event.addDomListener(window, 'load', initialize);
      //alert('oi');



    },

    fill: function(r){
    },

    data: {
      showTip: false,

      test: 'hello',

      getInfoTipText: function(name){
        if(name=='ok'){
          return "ola mundo";
        }

        return "olar";

      },

      getIconTip: function(){
        return $scope.home.data.showTip===true ? ['titip-bottom-right titip-wrapped', 'titip-active'] : [];
      },
      getIconStatus: function(name, tip){
        //console.log(name);
        //class="titip-top-right titip-wrapped titip-info titip-active" data-title="Digite o nome do local que você deseja procurar"

        if(typeof tip !== 'undefined'){


          $scope.home.data.showTip=!$scope.home.data.showTip;
        }

        if(name=='ok'){
          return  ['ion-checkmark-circled', 'icon', 'left'];
        }

        if(name=='danger'){
          return ['flaticon-round-1', 'danger',  'icon', 'left'];
        }


        if(name=='warning'){
          return ['flaticon-round-1', 'warning',  'icon', 'left'];
        }



        // {'':info.status=='ok', 'flaticon-round-1 danger':info.status=='danger', 'flaticon-round-1 warning': info.status=='warning':}

      }



    }
  };


  $scope.view=function(v){
    switch(v){
      case 'base.home':
        $rootScope.header.config({
          visible: true,
          back: false,
          filter: true,
          menu: true,
          search: true,
          bottom: true,
          title: "ConvêniosBR",
          class: "bar-calm"
        });

        $scope.home.start();

      break;

      case 'base.performer':
        $rootScope.header.config({
          visible: true,
          back: false,
          filter: true,
          menu: true,
          search: true,
          bottom: true,
          title: "Artistas",
          class: "bar-balanced"
        });

        $rootScope.performer.start();

      break;

      case 'base.agent':
        $rootScope.header.config({
          visible: true,
          back: false,
          filter: true,
          menu: true,
          search: true,
          bottom: true,
          title: "Produtores",
          class: "bar-assertive"
        });

        $rootScope.agent.start();
      break;

      case 'base.bookmarks':
        $rootScope.header.config({
          visible: true,
          back: false,
          filter: false,
          menu: true,
          search: true,
          bottom: true,
          title: "Favoritos",
          class: "bar-calm"
        });

        $rootScope.bookmarks.start();

      break;

      case 'base.search':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: true,
          bottom: true,
          title: $rootScope.search.term,
          class: "bar-energized"
        });

        //$rootScope.bookmarks.start();

      break;
    }
  };
});
