exports.predictHousePrice = (req, res, next) => {
    console.log('controller')
    var spawn = require('child_process').spawn;

    var bed = req.body;
    // console.log(bed)

    var process = spawn('python3', ['pickle.py', JSON.stringify(req.body.house)]);

    process.stdout.on('data', function(data) {
        console.log(data.toString());
        res.send(data.toString());
    })

    process.stdout.on('error', console.log)
}