"use strict";
/**
A simple library containing all the known [ansi escape codes and sequences](http://en.wikipedia.org/wiki/ANSI_escape_code).
@module
@alias ansi
*/
var a = require("array-tools");

/* Control Sequence Initiator */
var csi = "\x1b[";

var sgr = {};
sgr.effects = {
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
sgr.sequence = function(effectArray){
    effectArray = a.arrayify(effectArray);
    return csi + effectArray.map(function(effect){ return sgr.effects[effect]; }).join(";") + "m";
};

/**
@param {number} - the number of lines to move up
*/
exports.cursorUp = function(lines){ return csi + lines + "A"; };

/**
@param {number} - the number of lines to move down
*/
exports.cursorDown = function(lines){ return csi + lines + "B"; };

/**
remove all sgr effects
@type {string}
*/
exports.reset = csi + "0m";

/**
Bold or increased intensity
@type {string}
*/
exports.bold = csi + "1m";
exports.italic = csi + "3m";
exports.underline = csi + "4m";
exports.imageNegative = csi + "7m";
exports.fontDefault = csi + "10m";
exports.font2 = csi + "11m";
exports.font3 = csi + "12m";
exports.font4 = csi + "13m";
exports.font5 = csi + "14m";
exports.font6 = csi + "15m";
exports.imageNegative = csi + "7m";
exports.imagePositive = csi + "27m";

exports.black = csi + "30m";
exports.red = csi + "31m";
exports.green = csi + "32m";
exports.yellow = csi + "33m";
exports.blue = csi + "34m";
exports.magenta = csi + "35m";
exports.cyan = csi + "36m";
exports.white = csi + "37m";

/**
@param {string} - the string to format
@param {string[]} - a list of sgr effects to add
@returns {string}
*/
exports.format = function(str, effectArray){
    return sgr.sequence(effectArray) + str + sgr.sequence("reset");
};
