(function() {
  'use strict';

  angular
    .module('stock')
    .controller('headerController', function (userFactory){

      let vm = this;

      vm.user = userFactory.getData()

      vm.update = function (username){
        vm.user = userFactory.setData(username);
      }

    });

})();