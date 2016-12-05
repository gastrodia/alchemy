import * as express from  'express'
var router = express.Router();

router.get('/', function(req, res) {
    res.render('page1');
});

module.exports = router;