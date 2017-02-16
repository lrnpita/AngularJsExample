app.controller('homeController', function($scope, $http, subjectFactory){
	$scope.helloTo = {};
	$scope.helloTo.title = "AngularJS";
	$scope.students = [];

	$scope.student = {
		firstName: "Juan",
		lastName: "Perez",
		fees: "800",
		email: "juanperez@gmail.com",
		subjects: [
			{name:'Physics',marks:70},
			{name:'Chemistry',marks:80},
			{name:'Math',marks:65}
		],
		fullName: function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};

	$scope.reset = function() {
		$scope.student.firstName = "Juan";
		$scope.student.lastName = "Perez";
		$scope.student.email = "juanperez@gmail.com";
	};

	$scope.submit = function(student) { 
		$scope.students.push(angular.copy(student));
	};

	$scope.getData = function() {
		var url = "data.txt";
		
		$http.get(url).success(function(response){

			console.log(response);
			$scope.students = response;
		});
	};

//get data from factory
	$scope.subjects = subjectFactory.getSubjects();
	$scope.addSubject = function(newSubject) {
		subjectFactory.addSubject(newSubject);
		$scope.message = "Subject Added";
	};
});
