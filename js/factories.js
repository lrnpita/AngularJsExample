app.factory('subjectFactory', function(){
	var subjects = ["Math","Economy","Programming"];

	var subjectObj = {
		getSubjects: function(){
			return subjects;
		},
		addSubject: function(sub){
			subjects.push(sub);
		}
	}

	return subjectObj;
});