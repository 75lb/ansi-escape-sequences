#!/usr/bin/env node
"use strict";

var ansi = require("../");

var name = process.argv[2]; 
var arg1 = process.argv[3];
var seq = null;
    
if (typeof ansi[name] === "function"){
    seq = ansi[name](arg1);
} else {
    seq = ansi[name];
}
if (seq !== null) {
    process.stdout.write(seq);
}
