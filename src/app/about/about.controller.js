(function() {
  'use strict';

  angular
    .module('vent')
    .controller('AboutController', AboutController);

    function AboutController() {
      var skill = document.querySelectorAll('.skill');

      for (var i=0; i < skill.length; i++) {
        var percent = skill[i].querySelector('i').getAttribute('data-percent');
        skill[i].querySelector('div span').style.width = percent + '%';
      }
      


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
