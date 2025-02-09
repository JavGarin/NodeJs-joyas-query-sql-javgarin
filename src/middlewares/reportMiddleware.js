const reportMiddleware = (req, res, next) => {
    console.log(`Consulta realizada a la ruta: ${req.url}`);
    next();
};

module.exports = reportMiddleware;