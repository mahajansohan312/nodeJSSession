var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function(err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");
    console.log("atime regatime:" + stats.atime.toJSON())
    console.log("atime regatime:" + new Date(stats.atime))
        // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});