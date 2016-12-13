import * as express from  'express'
module.exports = function (app:express.Application) {
    // app.use('/', require('./page1'));
    // app.use('/page2', require('./page2'));
    app.use('/',require('./main'));
};
