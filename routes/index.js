const router = require('express').Router();
const routeConnection = require('./api');

router.use('./api', routeConnection);


router.use((req, res) => {
    res.send('hewwoo')
});

module.exports = router;