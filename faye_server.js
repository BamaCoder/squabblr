var http = require('http'),
    Faye = require('faye');

var server = http.createServer(),
    squabblr = new Faye.NodeAdapter({mount: '/faye', timeout: 5});

squabblr.attach(server); server.listen(8001);
