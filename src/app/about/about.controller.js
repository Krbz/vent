(function() {
  'use strict';

  angular
    .module('vent')
    .controller('AboutController', AboutController);

    function AboutController() {

    	document.querySelector('.switcher').addEventListener('click', function(){
        var switcherValue = false;    

    		switcherValue = !switcherValue;
	    	if (switcherValue) {
	    		document.querySelector('.container').classList.add("black");
	    	} else {
	    		document.querySelector('.container').classList.remove("black");    		
	    	}

    	})
    }
})();
