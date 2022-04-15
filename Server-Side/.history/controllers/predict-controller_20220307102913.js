exports.predictHousePrice = (req, res, next) => {
    var spawn = require('child_process').spawn;

    var bed = req.body.bedroom;

    var process = spawn('python', ['../pickle.py', req.body.toJson()]);

    process.stdout.on('data', function(data) {
        console.log(data);
        res.send(data.toString());
    })
}