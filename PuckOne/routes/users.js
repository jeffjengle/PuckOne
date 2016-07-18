var express = require('express');
var router = express.Router();
var osInfo = require('os')

/* GET users listing. */
router.get('/', function (req, res) {

    const exec = require('child_process').exec;
    if (osInfo.platform() === 'linux') { var commandToExecute = 'vcgencmd measure_temp' }
    exec(commandToExecute, function(err, stdout, stderr) {
        if (err) {
            console.error(err);
            return;
        }
        var cpuTemp = stdout.split("=").pop();
        var cpuTempF = convertTemp(cpuTemp, "C", "F");
        console.log(cpuTempF);
        res.send(cpuTempF);
    });

});

module.exports = router;