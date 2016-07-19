/* Convert temperatures */
module.exports.convertTemp = function (origTemp, origType, resultType) {
    switch (origType.toLowerCase()) {
        case "c":
            switch (resultType.toLowerCase()) {
                case "f":
                    return origTemp * (9 / 5) + 32;
                case "k":
                    return origTemp + 273.15;
                default:
                    return -999999
            }
        case "f":
            switch (resultType.toLowerCase()) {
                case "c":
                    return (origTemp - 32) * (5 / 9);
                case "k":
                    return (origTemp + 459.67) * (5 / 9);
                default:
                    return -999999
            }
        case "k":
            switch (resultType.toLowerCase()) {
                case "c":
                    return origTemp - 273.15;
                case "f":
                    return origTemp * (9 / 5) - 459.67;
                default:
                    return -999999
            }
    }
};