exports.predictHousePrice = (req, res, next) => {
    var spawn = require('child_process').spawn;

    var bed = req.body;
    // console.log(bed)

    var process = spawn('python', ['pickle.py', JSON.stringify(req.body.house)]);
    console.log('yoo');
    process.stdout.on('data', function(data) {
        console.log('heyyy');
        console.log(data.toString());
        res.send(data.toString());
    })

    process.stdout.on('error', console.log)
}