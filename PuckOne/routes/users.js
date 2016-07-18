var express = require('express');
var router = express.Router();
var osInfo = require('os');
/* var utils = require('../public/javascripts/utils'); */

/* GET users listing. */
router.get('/', function (req, res) {

    const exec = require('child_process').exec;
    if (osInfo.platform() === 'linux') {
        exec('vcgencmd measure_temp', function (err, stdout, stderr) {
            if (err) {
                console.error(err);
                return;
            }
            var cpuTemp = stdout.split("=").pop().replace(/\D/g, '');
            var cpuTempF = convertTemp(cpuTemp, "C", "F");
            console.log(cpuTempF);
            res.send({Temp: cpuTempF});
        });
        }
    else {      
         var cpuTemp = "0'C".replace(/\D/g, '');
         var cpuTempF = convertTemp(cpuTemp, "C", "F");
         console.log(cpuTempF);
         res.send({ Temp: cpuTempF });
     }
});

/* Convert temperatures */
function convertTemp(origTemp, origType, resultType) {
    switch (origType.toLowerCase()) {
        case "c":
            switch (resultType.toLowerCase()) {
                case "f":
                    return origTemp * 5 / 9 + 32;
                case "k":
                    return origTemp + 273.15;
                default:
                    return -999999
            }
        case "f":
            switch (resultType.toLowerCase()) {
                case "c":
                    return (origTemp - 32) * 5 / 9;
                case "k":
                    return (origTemp + 459.67) * 5 / 9;
                default:
                    return -999999
            }
        case "k":
            switch (resultType.toLowerCase()) {
                case "c":
                    return origTemp - 273.15;
                case "f":
                    return origTemp * 9 / 5 - 459.67;
                default:
                    return -999999
            }
    }
}
module.exports = router;