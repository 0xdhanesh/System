'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const port = 8765;
const root = __dirname;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2'
};

function safeJoin(base, reqPath) {
  const decoded = decodeURIComponent((reqPath || '/').split('?')[0].split('#')[0]);
  const cleaned = path.normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const full = path.join(base, cleaned);
  if (!full.startsWith(base)) return null;
  return full;
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405);
    return res.end();
  }

  let urlPath = (req.url || '/').split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = safeJoin(root, urlPath);
  if (!filePath) {
    res.writeHead(400);
    return res.end('Bad request');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(err.code === 'ENOENT' ? 404 : 500);
      return res.end(err.code === 'ENOENT' ? 'Not found' : 'Server error');
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': types[ext] || 'application/octet-stream',
      'Content-Length': data.length,
      'Cache-Control': ext === '.html' ? 'no-store' : 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
});

server.on('error', err => {
  console.error(`Could not start local server: ${err.message}`);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Kernel Quest: http://127.0.0.1:${port}/  (Ctrl+C to stop)`);
});
