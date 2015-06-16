#!/usr/bin/env node
"use strict";
var ansi = require("../");
var tr = require("transform-tools");

process.argv.splice(0, 2);
var method = process.argv.shift();
var args = process.argv;

process.stdin
    .pipe(tr.collect({
        through: function(input){
            if (method === "format"){
                return ansi.format(input, args);
            } else {
                console.error(ansi.format("invalid method: " + method, "red"));
            }
        }
    }))
    .pipe(process.stdout);

