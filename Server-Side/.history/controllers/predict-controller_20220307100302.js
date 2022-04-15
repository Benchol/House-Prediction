exports.predictHousePrice() = (req, res, next) => {
    var spawn = require('child_process').spawn;

    bed = req.body.bedroom;

    var process = spawn('python', ['../../'])
}