"use strict";
var a = require("array-tools");

/* Control Sequence Initiator */
var csi = "\x1b[";

/**
A simple library containing all known terminal [ansi escape codes and sequences](http://en.wikipedia.org/wiki/ANSI_escape_code). Useful for adding colour to your command-line output, or building a dynamic text user interface.
@exports ansi-escape-sequences
@typicalname ansi
@example
var ansi = require("ansi-escape-sequences");
*/
var ansi = {};

/**
Select Graphic Rendition codes
@property reset {string}
@property bold {string}
@property italic {string}
@property underline {string}
@property fontDefault {string}
@property font2 {string}
@property font3 {string}
@property font4 {string}
@property font5 {string}
@property font6 {string}
@property imageNegative {string}
@property imagePositive {string}
@property black {string}
@property red {string}
@property green {string}
@property yellow {string}
@property blue {string}
@property magenta {string}
@property cyan {string}
@property white {string}
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
    white: "\x1b[37m",
    
    /**
    * Returns an a sequence setting one or more effects
    * @param {string | string[]} - a sgr effect, or list of effects 
    * @returns {string}
    * @example
    * > ansi.sgrSequence("green")
    * '\u001b[32m'
    * > ansi.sgrSequence([ "green", "underline" ])
    * '\u001b[32;4m'
    */
    sequence: function(effectArray){
        effectArray = a.arrayify(effectArray);
        return csi + effectArray.map(function(effect){ return ansi.eEffects[effect]; }).join(";") + "m";
    },
    
    /**
    * A convenience function, formatting the input string with the specified sgr effects.
    * @param {string} - the string to format
    * @param {string[]} - a list of sgr effects to add
    * @returns {string}
    * @example
    * > ansi.sgr.format("what?", "green")
    * '\u001b[32mwhat?\u001b[0m'
    * > ansi.sgr.format("what?", ["green", "bold"])
    * '\u001b[32;1mwhat?\u001b[0m'
    */
    format: function(str, effectArray){
        return ansi.sgr.sequence(effectArray) + str + ansi.sgr.sequence("reset");
    }
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
cursor-related sequences
*/
ansi.cursor = {
    /**
    Moves the cursor `lines` cells up. If the cursor is already at the edge of the screen, this has no effect
    @param [lines=1] {number}
    @return {string}
    */
    up: function(lines){ return csi + (lines || 1) + "A"; },

    /**
    Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect
    @param [lines=1] {number}
    @return {string}
    */
    down: function(lines){ return csi + (lines || 1) + "B"; },

    /**
    Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect
    @param [lines=1] {number}
    @return {string}
    */
    forward: function(lines){ return csi + (lines || 1) + "C"; },

    /**
    Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect
    @param [lines=1] {number}
    @return {string}
    */
    back: function(lines){ return csi + (lines || 1) + "D"; },

    /**
    Moves cursor to beginning of the line n lines down.
    @param [lines=1] {number}
    @return {string}
    */
    nextLine: function(lines){ return csi + (lines || 1) + "E"; },

    /**
    Moves cursor to beginning of the line n lines up.
    @param [lines=1] {number}
    @return {string}
    */
    previousLine: function(lines){ return csi + (lines || 1) + "F"; },

    /**
    Moves the cursor to column n.
    @param n {number} - column number
    @return {string}
    */
    horizontalAbsolute: function(n){ return csi + n + "G"; },

    /**
    Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.
    @param n {number} - row number
    @param m {number} - column number
    @return {string}
    */
    position: function(n, m){ return csi + (n || 1) + ";" + (m || 1) + "H"; }
};

/**
erase sequences
*/
ansi.erase = {
    /**
    Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.
    @param n {number}
    @return {string}
    */
    display: function(n){ return csi + (n || 0) + "J"; },
    
    /**
    Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.
    @param n {number}
    @return {string}
    */
    inLine: function(n){ return csi + (n || 0) + "K"; }
};

module.exports = ansi;
