var express = require('express');
var router = express.Router();
var osInfo = require('os');
var utils = require('../public/javascripts/utils.js'); 

/* GET users listing. */
router.get('/', function (req, res) {

    const exec = require('child_process').exec;
    if (osInfo.platform() === 'linux') {
        exec('vcgencmd measure_temp', function (err, stdout, stderr) {
            if (err) {
                console.error(err);
                return;
            }
            var cpuTemp = stdout.split("=").pop().replace(/[^\.^0-9]/g, '');
            var cpuTempF = utils.convertTemp(cpuTemp, "C", "F");
            console.log('cpu temp: ' + cpuTemp);
            res.status('200').send({ TempF: cpuTempF });
            console.log('cpu tempF: ' + cpuTempF);
        });
        }
    else {      
         var cpuTemp = "0'C".replace(/[^\.^0-9]/g, '');
         var cpuTempF = utils.convertTemp(cpuTemp, "C", "F");
         console.log('cpu temp: ' + cpuTemp);
        res.status('200').send({ TempF: cpuTempF });
         console.log('cpu tempF: ' + cpuTempF);
     }
});
module.exports = router;