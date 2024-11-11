const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    const now = new Date(Date.now())
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    // f5 yapınca, browser cache'den getiriyor, ctrl + f5 yapınca tekrar istek gönderiyor
    // bunu ekleyince diğer header'ların hiçbir önemi yok (content stale olana kadar)
    res.header('cache-control', 'max-age=10')

    const ifModifiedSince = req.header('If-Modified-Since')
    if (ifModifiedSince) {
        res.status(304)
        res.end()

        return
    }

    res.header('Last-Modified', Date.now().toString())
    res.json({ now: `${ minutes }:${ seconds }` })
});

module.exports = router;
