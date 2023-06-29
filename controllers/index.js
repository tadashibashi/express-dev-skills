
function index(req, res, next) {
    res.render('index', { title: 'Express Dev Skills' });
}

module.exports = {
    index,
};
