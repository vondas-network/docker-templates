/**
 * app.js
 * @author Christopher Konopka
 * @description A dockerize NodeJS API template
 */

/**
 **************************
 * DEPENDENCIES ***********
 ************************** 
 */
const fukuisan = require('ohta');
fukuisan.askOhtaAbout('info', 'docker-node-template', 'app', 'INIT');

var express = require('express')
const cfonts = require('cfonts');

/**
 **************************
 * EXPRESS ****************
 ************************** 
 */
var app = express()
var port = 7300
var HOST = '0.0.0.0';

app.get('/testroute', function(req, res) {
    fukuisan.askOhtaAbout('info', 'docker-node-template', 'app.js - /testroute', "REQUEST");
    res.status(200).send('hello world')
    fukuisan.askOhtaAbout('info', 'docker-node-template', 'app.js - /testroute', "RESPONSE - hello world");
});

/**
 **************************
 * CFONT LOGO *************
 ************************** 
 */
cfonts.say('docker-node-template', {
    font: 'tiny', // define the font face
    align: 'left', // define text alignment
    colors: ['whiteBright', 'whiteBright'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', // define how many character can be on one line
    gradient: false, // define your two gradient colors
    independentGradient: true, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: 'node' // define the environment cfonts is being executed in
});

/**
 **************************
 * SERVER OP **************
 ************************** 
 */
app.listen(port, HOST, function() {
    fukuisan.askOhtaAbout('info', 'docker-node-template', 'app.js - init', "PORT - " + port);
})