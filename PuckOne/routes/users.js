var express = require('express');
var router = express.Router();
var osInfo = require('os')
var commandToExecute = 'dir'

/* GET users listing. */
router.get('/', function (req, res) {

    const exec = require('child_process').exec;
    if (osInfo.platform() === 'linux') { commandToExecute = 'vcgencmd measure_temp' }
    exec(commandToExecute, function(err, stdout, stderr) {
        if (err) {
            console.error(err);
            return;
        }
        var cpuTempF = stdout.split("=").pop();
        console.log(cpuTempF);
        res.send(cpuTempF);
    });

});

module.exports = router;