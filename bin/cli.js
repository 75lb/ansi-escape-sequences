#!/usr/bin/env node
"use strict";

var ansi = require("../");

var seq = ansi[process.argv[2]];
if (seq) process.stdout.write(seq);
