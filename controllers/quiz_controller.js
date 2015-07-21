var models = require('../models/models.js');

exports.show = function(req, res){
models.Quiz.findById(req.params.quizId).then(function(quiz) {
		res.render('quizes/show', { quiz: quiz})
	    //console.log('quiz =' +  quiz);	
//      res.render('quizes/question', { pregunta: quiz.pregunta})
    })
};



exports.answer = function(req, res){
	models.Quiz.findById(req.params.quizId).then(
	function(quiz) {
	 if(req.query.respuesta===quiz.respuesta){
	 	res.render('quizes/answer',{quiz: quiz, respuesta: 'Correcto'});
	 }
	 else{
	 	res.render('quizes/answer',{quiz: quiz, respuesta: 'Incorrecto'});
	 	//console.log('req.query.respuesta' +  req.query.respuesta);
	 }
	})
};

exports.index = function(req, res) {
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index.ejs', { quizes: quizes})
	})
};
