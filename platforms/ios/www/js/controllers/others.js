app.controller('Others', function($scope, $ionicSideMenuDelegate, $rootScope, $ionicBackdrop, $state, $localstorage) {
  $scope.onboarding={
    init: function(){
      $rootScope.menu.bottom.hide();
    },

    state: {
      name: 'onboardingOne',
      change: function($index){
        switch($index){
          case 0:
            $scope.onboarding.state.name='onboardingOne';
          break;

          case 1:
            $scope.onboarding.state.name='onboardingTwo';
          break;

          case 2:
            $scope.onboarding.state.name='onboardingThree';
          break;
        }
        //console.log($index);

      },
      value: 0
    }
  };

  $scope.about={
    init: function(){
      $rootScope.menu.bottom.hide();
    }
  };

  $scope.$watch(function(){return $state.current.name;}, function(v){
    $scope.view(v);
  });

  //$scope.showAlert();

  $scope.performerAdd = {
    start: function(){
      if($rootScope.loginInfos.isLogged===true){
        $scope.performerAdd.data.name=$rootScope.loginInfos.name;
        $scope.performerAdd.data.email=$rootScope.loginInfos.email;
        $scope.performerAdd.data.telephone=$rootScope.loginInfos.telephone;
      }

      //


    },
    save: {
      start: function(performerAddForm){
        if(!$scope.performerAdd.isValid(performerAddForm)){
          return false;
        }

        $scope.performerAdd.save.send();

      },

      send: function(){
        //alert('hi');
        $rootScope.req('profile/performer/add', $scope.performerAdd.data.get(), function(r){
          $scope.performerAdd.save.verify(r);
        });
      },

      verify: function(r){
        if(r.status=='success'){
          $scope.performerAdd.save.success();
        }else{
          $rootScope.notification.show("Ocorreu um erro", 0);
        }
      },

      success: function(){
        $scope.performerAdd.data.clear();
        $rootScope.popup.alert.show(
          'Solicitação efetuada com sucesso',
          " <img src='img/popup_email_success.png'> ",
          function(r){
            //console.log('oi chegou aqui');
            //console.log(r);
            $state.go("base.home");
          }
        );
      }
    },

    isValid: function(performerAddForm){
      if(!performerAddForm.$valid){
        return false;
      }

      return true;
    },

    data: {
      name: '',
      name_performer: '',
      email: '',
      telephone: '',
      obs: '',
      get: function(){

        return {
          name: $scope.performerAdd.data.name,
          name_performer: $scope.performerAdd.data.name_performer,
          email: $scope.performerAdd.data.email,
          telephone: $scope.performerAdd.data.telephone,
          obs: $scope.performerAdd.data.obs
        };
      },
      clear: function(){
        $scope.performerAdd.data.name="";
        $scope.performerAdd.data.name_performer="";
        $scope.performerAdd.data.email="";
        $scope.performerAdd.data.telephone="";
        $scope.performerAdd.data.obs="";
      }
    }
  };



  //alert('hi');

  $scope.view=function(v){
    switch(v){
      case 'others.onboarding':
        //essa regra tem que ser melhorada para que o usuário possa rever caso ele queira
        // if($localstorage.get('loggedin')=="true" || $localstorage.get('loggedin')===true){
        //   $state.go("base.home");
        //   return false;
        // }
        $rootScope.header.config({
          visible: false,
          back: false,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          classAdd: 'bar-transparent'
        });
        //$scope.onboarding.init();
      break;

      case 'others.about':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Sobre o Urban Maps",
          class: "bar-balanced"
        });
      break;


      case 'others.about_list':
      //alert('oi');
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Colaboradores",
          class: "bar-balanced"
        });
      break;


      case 'others.magazine':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: true,
          title: "Ler revista",
          class: "bar-calm"
        });
      break;

      case 'others.feedback':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Feedback e suporte",
          class: "bar-royal"
        });

        $scope.performerAdd.start();
      break;


    }
  };
});
