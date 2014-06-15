"use strict";

/* Control Sequence Initiator */
var csi = "\x1b[";

exports.cursorUp = function(lines){ return csi + lines + "A"; };
exports.cursorDown = function(lines){ return csi + lines + "B"; };
exports.reset = csi + "0m";
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
