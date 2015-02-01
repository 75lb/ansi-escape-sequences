#!/usr/bin/env node
"use strict";

var ansi = require("../");

var name = process.argv[2];
var name2 = process.argv[3];
var arg1 = process.argv[4];
var arg2 = process.argv[5];
var seq = null;

if (typeof ansi[name][name2] === "function"){
    seq = ansi[name][name2](arg1, arg2);
} else {
    seq = ansi[name][name2];
}
if (seq !== null) {
    process.stdout.write(seq);
}
