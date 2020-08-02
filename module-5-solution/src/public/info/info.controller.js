(function(){
  'use strict';

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['UserService'];
  function InfoController(UserService){
    var $ctrl = this;
    $ctrl.basePath = "https://jlpatarroyo-course5.herokuapp.com";
    $ctrl.user = UserService.getUser();
  }

})();
