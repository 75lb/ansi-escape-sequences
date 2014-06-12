"use strict";

/* Control Sequence Initiator */
var csi = "\x1b[";

exports.cursorUp = function(lines){ return csi + lines + "A"; };
exports.cursorDown = function(lines){ return csi + lines + "B"; };
exports.reset = csi + "0m";
exports.bold = csi + "1m";
exports.underline = csi + "4m";
