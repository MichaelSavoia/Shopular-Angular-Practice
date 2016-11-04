(function() {
  'use strict';

  angular
    .module('stock')
    .controller('inventoryController', function inventoryController(dataFactory){

      let vm = this;

      vm.items = dataFactory.getData();

      vm.tax = 1.0575;

      vm.update = function (item){
        let id = Date.now();
        item.id = id;

        vm.items = dataFactory.setData(item);

        vm.form = {};
      }

      vm.change = function(quantity){
        
      }

    });

})();