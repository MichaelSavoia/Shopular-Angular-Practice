(function() {
    'use strict';

    angular
        .module('stock')
        .factory("userFactory", function() {

        	const getData = function(){
        		if(localStorage.getItem("user")){
        			return JSON.parse(localStorage.getItem('user'));
        		}

        		return false;
        	}

        	const setData = function(username){
        		let user = {
        			username: username,
        			time: Date.now(),
        		}
        		localStorage.setItem('user', JSON.stringify(user))
        		return user;
        	}

	    return{
	  		getData,
	  		setData,
	  	}
	  	});


})();
