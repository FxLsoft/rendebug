var sourceMap = require("source-map");
var fs = require("fs");

var util = {
    async analysisSourceMap(mapFile, lineNumber, columnNumber) {
        var data = fs.readFileSync(mapFile, "utf-8");
        data = JSON.parse(data);
        var smc = await new sourceMap.SourceMapConsumer(data);
        var originPosition = {};
        try {
            originPosition = smc.originalPositionFor({
                line: +lineNumber,
                column: +columnNumber
            });
        } catch (error) {
            console.log(error);
        }

        return originPosition;
    }
};

module.exports = util;
