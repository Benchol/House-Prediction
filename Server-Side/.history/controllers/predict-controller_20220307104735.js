exports.predictHousePrice = (req, res, next) => {
    // console.log('controller')
    var spawn = require('child_process').spawn;

    var bed = req.body.bedroom;

    console.log(JSON.stringify(req.body.bedroom))

    var process = spawn('python3', ['./../pickle.py', req.body]);

    process.stdout.on('data', function(data) {
        console.log(data);
        res.send(data.toString());
    })

    process.stdout.on('error', console.log)
}