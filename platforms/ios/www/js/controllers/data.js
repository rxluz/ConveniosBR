app.controller('Data', function($scope, $ionicSideMenuDelegate, $rootScope, $ionicBackdrop, $state, $cookies, $ionicPopup, $q,$localstorage, $ionicScrollDelegate, $ionicPopover, $cordovaCamera, $timeout, $cordovaSocialSharing, $cordovaInAppBrowser) {
  $scope.$watch(function(){return $state.current.name;}, function(v){
    $scope.view(v);
  });



  $scope.shareAnywhere = function() {
      $cordovaSocialSharing.share("Urban Maps", "Urban Maps", "", "https://urban.ma");
  };

  $scope.height="180px";

  $scope.resources={
    whell: false,
    visual: false,
    hearing: false,
    mental: false,
    test: function(){
      alert('ola');
    }
  };



  $scope.comments={
    flag: {
      init: function(id){
        if($rootScope.acb.voiceover()===true){
          alert('Comentário denunciado com sucesso');
          //$rootScope.notification.show("Comentário denunciado com sucesso", 0);
        }else{
          $rootScope.menu.footer.show([
            {
              icon: "icon flaticon-round-1",
              name: "Marcar como impróprio",
              action: function(){
                //console.log('ila');
                //console.log($rootScope);

              }
            }
          ]);
        }

      }
    },

    all: {
      close: function(){
        $rootScope.modal.close.start();
        $rootScope.popupIsOpen=false;
      },

      init: function(id){
        $rootScope.popupIsOpen=true;
        $rootScope.popup.content.start('templates/data.local.comments.html', $scope);
      }
    }
  };



  $scope.photo={
    add: {
      init: function(id, popupIsOpen){
        $scope.photo.add.clear(id);



        $rootScope.menu.footer.show([
          {
            icon: "icon flaticon-camera",
            name: "Tirar uma foto",
            action: function(){
              $scope.photo.add.take(id);

            }
          },
          {
            icon: "icon flaticon-square",
            name: "Foto da biblioteca",
            action: function(){
              $scope.photo.add.choose(id);
            }
          }
        ]);
      },

      clear: function(id){
        //essa função limpa a lista de fotos toda a vez que o usuário muda de local, impedindo que fotos que foram adicionadas anteriormente sejam vistas na adição de um novo local
        if($scope.photo.add.id!=id){
          $scope.photo.add.id=id;
          $scope.photo.add.list=[];
        }
      },

      id: false,

      take: function(id){
        var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.CAMERA,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false
        };

         $cordovaCamera.getPicture(options).then(function (imageData) {
             //$scope.imgURI = "data:image/jpeg;base64," + imageData;
             $scope.photo.add.popup.start(1, imageData);
         }, function (err) {
             // An error occured. Show a message to the user
         });
      },

      choose: function(id){
        var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false,
         limit: 10
        };

         $cordovaCamera.getPicture(options).then(function (imageData) {
             $scope.imgURI = "data:image/jpeg;base64," + imageData;
             $scope.photo.add.popup.start(1, imageData);
         }, function (err) {
             // An error occured. Show a message to the user
         });
      },

      popup: {
        start: function(id, imageData){
          $scope.photo.add.list.push("data:image/jpeg;base64,"+imageData);
          //console.log($scope.photo.add.list);

          if(!$scope.photo.add.popup.isOpen){
            $rootScope.popup.content.start('templates/data.local.photo.list.html', $scope);
            $scope.photo.add.popup.isOpen=true;
          }

        },

        isOpen: false,

        close: function(){
          $scope.photo.add.popup.isOpen=false;
          $rootScope.modal.close.start();
        }
      },

      list: [],

      delete: {
        start: function($index){
          //console.log($index+"oi");
          $scope.photo.add.delete.id=$index;
          $timeout(function(){
            $scope.photo.add.list.splice($index);
            $scope.photo.add.delete.id=false;
          }, 600);

        },

        class: function($index){

          if($index===$scope.photo.add.delete.id){
            return ['delete'];
          }else{
            return [];
          }

        },

        id: false
      }

    },

    fullScreen: {
      init: function(){

        $rootScope.sliderStyle={
          height: (window.screen.height-200)+"px"
        };

        $rootScope.popup.alert.show(
          'Galeria de fotos', {
            url: "templates/data.local.photo.full.html"
          },
          function(){}
        );

      }
    }
  };

  $scope.scrollData=function(){
    //scrollInfos.init()
    $rootScope.$apply(function(){
      if($ionicScrollDelegate.getScrollPosition().top>180){
        $rootScope.header.class="bar-local-scroll";
        $rootScope.header.title="Museu de Arte Moderna de São Paulo";
      }else{
        $rootScope.header.class="bar-local";
        $rootScope.header.title="";

      }
    });

    //console.log($rootScope.header.class);

  };

  $scope.review={
    init: function(id){
      $rootScope.popup.content.start('templates/data.local.review.html', $scope);
    }
  };





  $scope.view=function(v){
    switch(v){
      case 'data.local':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: true,
          share: true,
          bottom: false,
          title: "",
          class: "bar-local"
        });

      break;
    }
  };
});
