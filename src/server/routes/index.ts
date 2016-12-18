import * as express from  'express'
module.exports = function (app:express.Application) {
    // app.use('/', require('./page1'));
    app.use('/',require('./main'));
    //app.use('/threetest', require('./trheetest'));
    
};
