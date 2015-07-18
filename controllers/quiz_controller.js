// GET /quizes/question
exports.question = function(req, res) {
   res.render('quizes/question', {pregunta: 'Capital de Marruecos'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
   if (req.query.respuesta === 'Rabat'){
      res.render('quizes/answer', {respuesta: 'Correcto'});
   } else {
      res.render('quizes/answer', {respuesta: 'Incorrecto'});
   }
};
