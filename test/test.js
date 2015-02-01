var test = require("tape");
var ansi = require("../");

test("format", function(t){
    t.equal(ansi.sgr.format("clive", ["red", "underline"]), "\u001b[31;4mclive\u001b[0m");
    t.end();
});
