(function() {
  'use strict';

  angular
    .module('vent')
    .controller('AboutController', AboutController);

    function AboutController() {
       
      function skillBarsAnimation() {
        for (var i=0; i < skill.length; i++) {
          var percent = skill[i].querySelector('i').getAttribute('data-percent');
          skill[i].querySelector('div span').style.width = percent + '%';
        }
      }


      function resetSkillBarAnimation() {
        for (var i=0; i < skill.length; i++) {
          skill[i].querySelector('div span').style.width = '0%';
        }
        setTimeout(skillBarsAnimation, 300);
      }

      var skill = document.querySelectorAll('.skill');
      setTimeout(skillBarsAnimation, 500)
      
      var switcherValue = false;    
    	document.querySelector('.switcher').addEventListener('click', function(){

    		switcherValue = !switcherValue;
	    	
        if (switcherValue) {
        
          resetSkillBarAnimation();

	    		document.querySelector('body').classList.add("black");
	    	
        } else {

          resetSkillBarAnimation();
  	      
      		document.querySelector('body').classList.remove("black");          
          document.querySelector('body').classList.add("white");
   		
	    	}

    	})
    }
})();
