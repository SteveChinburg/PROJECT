const express = require('express');
const app = express();
const http = require('http');

// 2
const hostname = 'localhost';
const port = 3000;

// 3
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Welcome to the world of Node development!\n');
});

// 4
