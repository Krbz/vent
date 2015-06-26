(function() {
  'use strict';

  angular
    .module('vent')
    .controller('AboutController', AboutController);

    function AboutController() {
      var switcherValue = false;    
    	document.querySelector('.switcher').addEventListener('click', function(){
        

    		switcherValue = !switcherValue;
	    	if (switcherValue) {
	    		document.querySelector('body').classList.add("black");
	    	} else {
	    		document.querySelector('body').classList.remove("black");          
          document.querySelector('body').classList.add("white");
   		
	    	}

    	})
    }
})();
