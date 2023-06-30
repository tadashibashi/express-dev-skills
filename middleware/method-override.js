// Poor-man's method-override
const methodOverride = function(varName = "_method") {
    return function(req, res, next) {
        const reqType = req.query[varName];
        if (reqType !== undefined) {
            req.method = reqType;
        }

        next();
    };
};

module.exports = methodOverride;
