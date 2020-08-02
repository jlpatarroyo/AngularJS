(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject=['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService){
    var $ctrl = this;
    console.log($ctrl);
    $ctrl.user = {};
    $ctrl.completed = false;
    $ctrl.basePath = "https://jlpatarroyo-course5.herokuapp.com";

    $ctrl.submit = function(){
      MenuService.getMenuItem($ctrl.user.tempDish).then(function(response){
        $ctrl.user.favDish = response.data;
        $ctrl.completed = true;
        $ctrl.dishError = false;
        UserService.setUser($ctrl.user);
      }).catch(function(reason){
        $ctrl.dishError = true;
      });
    }
  }
})();
