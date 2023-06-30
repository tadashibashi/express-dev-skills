// Main "/" index controller
 function index(req, res, next) {
    res.locals.vars = {
     title: '',
    };

    res.render('index');
}

module.exports = {
    index,
};
