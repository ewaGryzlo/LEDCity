const Survey = require('../models/Surveys');

exports.getAddSurvey = (req, res, next) => {
<<<<<<< HEAD

=======
>>>>>>> 88ef58257706174692e5344938894e04b0ef851b
    res.render('ankiety2', {
        pageTitle:'Add Survey',
        path: '/survey2',
        editing: false,
<<<<<<< HEAD
        isAuthenticated: req.session.isLoggedIn
=======
>>>>>>> 88ef58257706174692e5344938894e04b0ef851b

    });
};

exports.postAddSurvey = (req, res, next) => {
    console.log(req.body);
    const survey = {
        title: req.body.questionnaireTitle,
        questions: req.body.questionnaireBody
    };
     new Survey(survey)
    .save()
         .then(result =>{
            console.log('Created Survey');
             res.status(200).send({
                 status: "ok"
             });
        })
        .catch(err =>{
            console.log(err);
        });

};
