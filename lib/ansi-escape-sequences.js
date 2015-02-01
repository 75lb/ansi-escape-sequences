"use strict";
var a = require("array-tools");

/* Control Sequence Initiator */
var csi = "\x1b[";

/**
A simple library containing all the known [ansi escape codes and sequences](http://en.wikipedia.org/wiki/ANSI_escape_code).
@exports ansi-escape-sequences
@typicalname ansi
@example
var ansi = require("ansi-escape-sequences");
*/
var ansi = {};

/**
Select Graphic Rendition codes
@enum {string}
@readonly
@example
console.log(ansi.sgr.red + "this is red" + ansi.sgr.reset);
*/
ansi.sgr = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    italic: "\x1b[3m",
    underline: "\x1b[4m",
    fontDefault: "\x1b[10m",
    font2: "\x1b[11m",
    font3: "\x1b[12m",
    font4: "\x1b[13m",
    font5: "\x1b[14m",
    font6: "\x1b[15m",
    imageNegative: "\x1b[7m",
    imagePositive: "\x1b[27m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
};

/**
Returns an a sequence setting one or more effects
@param {string | string[]} - a sgr effect, or list of effects 
@returns {string}
@example
> ansi.sgrSequence("green")
'\u001b[32m'
> ansi.sgrSequence([ "green", "underline" ])
'\u001b[32;4m'
*/
ansi.sgrSequence = function(effectArray){
    effectArray = a.arrayify(effectArray);
    return csi + effectArray.map(function(effect){ return ansi.eEffects[effect]; }).join(";") + "m";
};

/**
effects
@enum
@ignore
*/
ansi.eEffects = {
    reset: 0,
    bold: 1,
    italic: 3,
    underline: 4,
    imageNegative: 7,
    fontDefault: 10,
    font2: 11,
    font3: 12,
    font4: 13,
    font5: 14,
    font6: 15,
    imagePositive: 27,
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37
};


/**
Moves the cursor `lines` (default 1) cells up. If the cursor is already at the edge of the screen, this has no effect
*/
ansi.cursorUp = function(lines){ return csi + lines + "A"; };

/**
Moves the cursor `lines` (default 1) cells down. If the cursor is already at the edge of the screen, this has no effect
*/
ansi.cursorDown = function(lines){ return csi + lines + "B"; };

/**
Formats the input string with the specified sgr effects
@param {string} - the string to format
@param {string[]} - a list of sgr effects to add
@returns {string}
@example
> ansi.format("what?", "green")
'\u001b[32mwhat?\u001b[0m'
> ansi.format("what?", ["green", "bold"])
'\u001b[32;1mwhat?\u001b[0m'
*/
ansi.format = function(str, effectArray){
    return ansi.sgrSequence(effectArray) + str + ansi.sgrSequence("reset");
};

module.exports = ansi;