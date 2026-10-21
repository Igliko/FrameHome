'use strict';
// Small helper that runs inside TizenBrew on the TV.
// The home screen page can't read files on the TV, so this serves the
// installed apps' own icons to it at http://127.0.0.1:47811/icon?path=...
// It only listens on the TV itself and only returns image files.

var http = require('http');
var fs = require('fs');
var url = require('url');

var TYPES = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', svg: 'image/svg+xml', gif: 'image/gif' };

var server = http.createServer(function (req, res) {
  var u = url.parse(req.url, true);
  if (u.pathname === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
    res.end('ok');
    return;
  }
  if (u.pathname !== '/icon') { res.writeHead(404); res.end(); return; }

  var p = String(u.query.path || '').replace(/^file:\/\//, '');
  var ext = (p.split('.').pop() || '').toLowerCase();
  if (p.charAt(0) !== '/' || p.indexOf('..') >= 0 || !TYPES[ext]) { res.writeHead(400); res.end(); return; }

  fs.readFile(p, function (err, data) {
    if (err) { res.writeHead(404, { 'Access-Control-Allow-Origin': '*' }); res.end(); return; }
    res.writeHead(200, {
      'Content-Type': TYPES[ext],
      'Cache-Control': 'max-age=604800',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
});

server.on('error', function () { /* already running (port in use) - nothing to do */ });
server.listen(47811, '127.0.0.1');
