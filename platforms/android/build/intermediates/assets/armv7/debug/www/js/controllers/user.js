app.controller('User', function($scope, $ionicSideMenuDelegate, $rootScope, $ionicBackdrop, $state, $cookies, $ionicPopup, $q,$localstorage) {


  $scope.$watch(function(){return $state.current.name;}, function(v){
    $scope.view(v);
  });

  $rootScope.signIn = {
    login: {
      start: function(){
        $rootScope.req("sign/login", $rootScope.signIn.data, function(r){$rootScope.signIn.login.verify(r);});
      },

      verify: function(r){
        if(r.status=='success'){
          $rootScope.signIn.login.success();
          return true;
        }

        $rootScope.notification.show("Usuário/senha incorretos", 0);
        return false;
      },

      success: function(){
        $rootScope.loginInfos.isLogged=true;
        $rootScope.notification.show("Bem vindo!", 5000);
        $state.go("base.home");
      },

      logout: {
        start: function(){
          angular.forEach($cookies.getAll(), function (v, k) {
              $cookies.remove(k);
          });

          $rootScope.loginInfos.clear();
          $rootScope.signUp.data.clear();

          $state.go("base.home");
          $rootScope.notification.show("Até logo!", 3500);
          $ionicSideMenuDelegate.toggleLeft(false);
          return true;
          //alert('ola mundo');
        }
      },

      facebook: {
        start: function() {

            openFB.init({appId: '660552810751144'});
            openFB.login(
              function(response) {
                  if(response.status === 'connected') {
                      //alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                      ////console.log(response);

                      $localstorage.set('accessToken', response.authResponse.accessToken);
                      //var $localStorage=$localStorage;

                      openFB.api({
                          path: "/v2.5/me",
                          params: { "access_token": $localstorage.get('accessToken'), "fields":"email,name,picture" },
                          success: function (response) {
                              //com essas informações verifica se o usuário já existe, se já existir efetua o login, se não existir vai para a tela de inscrição
                              //console.log(response);
                              $rootScope.signIn.login.facebook.send(response);
                          },
                          error: function(err){
                         }
                      });
                  } else {

                  }
              }, {scope: 'email,public_profile'});
          },


          send: function(response){
              $rootScope.req
              (
                "sign/login/facebook",
                {
                  code: response.id+"082b82c6e8fcfba13ac0abebcd391a5e"
                },
                function(r){
                  ////console.log(response);
                  if(r.status=="fail"){
                    //nesse caso redireciona o usuário para a tela de inscrição com algumas informações já preenchidas na memória, como nome,
                    $localstorage.setObject('facebookInfos', response);
                    $state.go("user.signup");
                  }

                  if(r.status=="success"){
                    $rootScope.signIn.login.success();

                  }
                }
              );
          },

          isLogged: function(){
            var facebookObj=$localstorage.getObject("facebookInfos");
            ////console.log(facebookObj);
            ////console.log(typeof facebookObj.name);

            if(typeof facebookObj.name !== 'undefined'){
                ////console.log('entrou aqui');
                return true;
            }

            return false;
          }
        }
    },

    data: {
      code: '',
      password: ''
    },

    isValid: function(signInForm){
      if(!signInForm.$valid){
        return false;
      }

      return true;
    },

    save: {
      start: function(signInForm){
        if(!$rootScope.signIn.isValid(signInForm)){
          return false;
        }
      }
    }
  };


  $rootScope.signUp = {
    start: function(){
      //alert('oi');
      var facebookObj=$localstorage.getObject("facebookInfos");

      $rootScope.signUp.data.name=(typeof facebookObj.name !== undefined?facebookObj.name:"");
      $rootScope.signUp.data.email=(typeof facebookObj.email !== undefined?facebookObj.email:"");
      $rootScope.signUp.data.facebook_profile_id=(typeof facebookObj.id !== undefined?facebookObj.id:" ");

      $localstorage.set('user_photo', (typeof facebookObj.id !== undefined?"https://graph.facebook.com/"+ facebookObj.id+"/picture?width=300":false));

    },
    data: {
      type: {
        list: [
          {name: "Empresário artistico", id:"1"},
          {name: "Contratante", id:"2"},
          {name: "Outros", id:"3"}
        ],
        value: false
      },
      name: '',
      email: '',
      //telephone: '',
      password: '',
      password_confirm: '',
      facebook_profile_id: '',
      get: function(){
        var data=$rootScope.signUp.data;
        return {
          "type" : data.type.value,
          "name" : data.name,
          "email" : data.email,
          "password" : data.password,
          //"telephone" : data.telephone,
          "facebook_profile_id": data.facebook_profile_id+""
        };
      },
      clear: function(){
        $rootScope.signUp.data.type.value=false;
        $rootScope.signUp.data.name="";
        $rootScope.signUp.data.email="";
        $rootScope.signUp.data.password="";
        //$rootScope.signUp.data.telephone="";
        $rootScope.signUp.data.facebook_profile_id="";
        //console.log($rootScope.signUp.data);
      }

    },

    isValid: function(signUpForm){
      if(!signUpForm.$valid){
        return false;
      }

      return true;
    },

    save: {
      start: function(signUpForm){
        if(!$rootScope.signUp.isValid(signUpForm)){
          return false;
        }

        $rootScope.req(
          "sign/set/user",
          $rootScope.signUp.data.get(),
          function(r){ $rootScope.signUp.save.verify(r);}
        );

        //return false;
        //alert('tudo certo');
      },

      verify: function(r){
        switch(r.status){
          case 'success':
            $rootScope.signUp.save.success();
          break;

          case 'email_invalid':
            $rootScope.notification.show('Esse email já existe', 0);
          break;
        }
      },

      success: function(){
        $rootScope.loginInfos.isLogged=true;
        $rootScope.notification.show("Cadastro feito com sucesso", 5000);
        $state.go("base.home");

      }
    },

    isLogged: false
  };


  $rootScope.userEdit={
    fill: function(){
      $rootScope.userEdit.data.name=$rootScope.loginInfos.name;
      $rootScope.userEdit.data.email=$rootScope.loginInfos.email;
      $rootScope.userEdit.data.telephone=$rootScope.loginInfos.telephone;

    },

    data: {
      name: false,
      email: false
    },

    isValid: function(userEditForm){
      if(!userEditForm.$valid){
        return false;
      }

      return true;
    },

    save: {
      start: function(userEditForm){
        if(!$rootScope.userEdit.isValid(userEditForm)){
          return false;
        }
        //alert('ola mundo');
        $rootScope.userEdit.save.send();
      },
      send: function(){
        $rootScope.req("users/set/basic", $rootScope.userEdit.data, function(r){$rootScope.userEdit.save.verify(r);});
      },

      verify: function(r){
        switch(r.status){
          case 'success':
            $rootScope.userEdit.save.success();
          break;

          case 'email_invalid':
            $rootScope.notification.show('Esse email já existe', 0);
          break;
        }
      },

      success: function(){
        $rootScope.notification.show("Seu perfil foi atualizado", 5000);
        $state.go("base.home");
      }
    }
  };



  $rootScope.password = {
    send: function(){
      //verifica se o usuario existe e a senha esta correta
      //define o cookie do usuário logado e chama a função success
      $rootScope.req("users/set/password", $rootScope.password.data, function(r){$rootScope.password.verify(r);});
    },

    verify: function(r){
      if(r.status=="success"){
        $rootScope.password.success();
        return true;
      }

      $rootScope.notification.show('Senha atual incorreta', 0);
      $rootScope.password.clear();
      return false;

    },

    clear: function(){
      $rootScope.password.data={
        password: undefined,
        new_password: undefined,
        password_1: undefined
      };
    },


    success: function(){
      //valida o login, se houver pagina de redirecionamento definida redireciona ele para a pagina definida, do contrário redireciona para a página inicial e altera o texto no header
      $rootScope.notification.show('Senha alterada', 0);

      $state.go("base.home");
    },

    isValid: function(passwordForm){
      if(!passwordForm.$valid){
        return false;
      }

      return true;
    },

    data: {
      password: undefined,
      new_password: undefined,
      password_1: undefined
    }

  };


  $rootScope.userCancel = {
    list: {
      data: [{name: "Nao gostei", id: 0}, {name: "Ruim", id: 1}]
    }
  };



  $scope.view=function(v){
    switch(v){
      case 'user.signup':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Inscreva-se",
          class: "bar-assertive",
          classAdd: "bar-assertive"
        });
        $rootScope.signUp.start();
      break;

      case 'user.signin':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Efetuar Login",
          class: "bar-dark"
        });

      break;

      case 'user.edit':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Editar perfil",
          class: "bar-edit"
        });

        $rootScope.userEdit.fill();

      break;

      case 'user.reviews':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Locais avaliados",
          class: "bar-edit"
        });
      break;

      case 'user.places':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Meus locais",
          class: "bar-edit"
        });
      break;


      case 'user.password':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Alterar senha",
          class: "bar-edit"
        });
      break;

      case 'user.cancel':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: false,
          bottom: false,
          title: "Cancelar minha conta",
          class: "bar-edit"
        });
      break;
    }
  };

});
