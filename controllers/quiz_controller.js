var models = require('../models/models.js');

exports.question = function(req, res){
models.Quiz.find(req.params.quizId).then(function(quiz) {
      res.render('quizes/question', { pregunta: quiz.pregunta})
      //console.log('quiz.pregunta');
      //console.log(quiz.pregunta);
     // console.log("quiz.id " + quiz[{pregunta}]);

    })
};

exports.answer = function(req, res){
	models.Quiz.find(req.params.quizId).then(
	function(quiz) {
	 if(req.query.respuesta===quiz.respuesta){
	 	res.render('quizes/answer',{respuesta: 'Correcto'});
	 }
	 else{
	 	res.render('quizes/answer',{respuesta: 'Incorrecto'});
	 	//console.log('req.query.respuesta' +  req.query.respuesta);
	 	//console.log('quiz' + quiz);
		//console.log(req.query.respuesta);
		//console.log('quiz.respuesta');
		//console.log(quiz.respuesta);
	 }
	})
};
