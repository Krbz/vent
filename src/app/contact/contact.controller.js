(function() {
  'use strict';

  angular
    .module('vent')
    .controller('ContactController', ContactController);

    function ContactController($scope, $http) {
		var close = document.querySelectorAll('.close'),
			number = document.querySelector('input[type="tel"]');

		number.addEventListener('blur', function() {
			if (number.value.length !== 0) {
				number.value.replace(/\D[^\.]/g, "");

				// console.log('val', number.value.length / 3);
				var division = number.value.length / 3;
				var division = Math.floor(division);
				switch(division) {
					case 0: {
						var numb = '...' + '-' + '...';
						numb = numb + '-'  + '...';
						number.value = numb;
						break;
					}
					case 1:
						if (number.value.length > 3) {
							var numb = number.value.substr(0,3) + '-';
							numb = numb + number.value.substr(3,3);
							number.value = numb;
						} else {
							var numb = number.value.substr(0,number.value.length) + '...';
							number.value = numb;
						}
						break;
					case 2:
						var numb = number.value.substr(0,3) + '-';
						numb = numb + number.value.substr(3,6)+ '...';
						number.value = numb;
						break;

					default: 
						var numb = number.value.substr(0,3) + '-';
							numb = numb + number.value.substr(3,3) + '-';
							numb = numb + number.value.substr(6,10);
						number.value = '+48 ' + numb;
						number.classList.add('correct');	
						break;
				}
			}
		})

		for (var i=0; i < close.length; i++) {
			close[i].addEventListener('click', function() {
				var parent = this.parentElement;
				parent.remove();

			})
		}
		// creating a blank object to hold our form information.
		//$scope will allow this to pass between controller and view
		$scope.formData = {};
		// submission message doesn't show when page loads
		$scope.submission = false;
		// Updated code thanks to Yotam
		var param = function(data) {
		    var returnString = '';
		    for (var d in data){
		        if (data.hasOwnProperty(d))
		           returnString += d + '=' + data[d] + '&';
		    }
		    // Remove last ampersand and return
		    return returnString.substr( 0, returnString.length - 1 );
		};
		$scope.submitForm = function() {
		$http({
			method : 'POST',
			url : '/process.php',
			data : param($scope.formData), // pass in data as strings
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
		})
		.success(function(data) {
		  if (!data.success) {
		   // if not successful, bind errors to error variables
			   $scope.errorName = data.errors.name;
			   $scope.errorEmail = data.errors.email;
			   $scope.errorTextarea = data.errors.message;
			   $scope.submissionMessage = data.messageError;
			   $scope.submission = true; //shows the error message
		  } else {
		  // if successful, bind success message to message
			   $scope.submissionMessage = data.messageSuccess;
			   $scope.formData = {}; // form fields are emptied with this line
			   $scope.submission = true; //shows the success message
		  }
		 });
   };
    }
})();
