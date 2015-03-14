Gooy Angular demo
=======

[![GitHub version](https://badge.fury.io/gh/gooy%2Fgooy-angular-demo.svg?style=flat-square)](http://badge.fury.io/gh/gooy%2Fgooy-angular-demo)
[![Build Status](https://travis-ci.org/gooy/gooy-angular-demo.svg?branch=master&style=flat-square)](https://travis-ci.org/gooy/gooy-angular-demo)
[![Dependency Status](https://david-dm.org/gooy/gooy-angular-demo.svg?style=flat-square)](https://david-dm.org/gooy/gooy-angular-demo)
[![devDependency Status](https://david-dm.org/gooy/gooy-angular-demo/dev-status.svg?style=flat-square)](https://david-dm.org/gooy/gooy-angular-demo#info=devDependencies)  
[![ES6 format](https://img.shields.io/badge/JS_format-es6-orange.svg?style=flat-square)](http://www.ecmascript.org/)
[![JSPM](https://img.shields.io/badge/JSPM-gooy/gooy--angular--demo-db772b.svg?style=flat-square)](http://jspm.io)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Built with gulp](http://img.shields.io/badge/built%20with-gulp.js-red.svg?style=flat-square)](http://gulpjs.com/)

A demo application for [gooy-angular](http://github.com/gooy/gooy-angular).

## Demo

- [Demo App](http://gooy.github.io/gooy-angular-demo)

## Installation

Clone this repository and run an npm and jspm install to get the dependencies.

    npm install && jspm install
    
Start a server and watch for changes:
    
    gulp watch

## Bundle for production

    gulp bundle
    
Then uncomment the line in the html header.

    <script src="dist/app.bundle.js"></script>
