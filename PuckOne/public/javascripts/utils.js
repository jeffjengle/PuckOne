/* Convert temperatures */
function convertTemp(origTemp, origType, resultType) {
    switch (origType.tolowercase()) {
        case "c":
            switch (resultType.tolowercase()) {
                case "f":
                    return origTemp * 5 / 9 + 32;
                case "k":
                    return origTemp + 273.15;
                default:
                    return -999999
            }
        case "f":
            switch (resultType.tolowercase()) {
                case "c":
                    return (origTemp - 32) * 5 / 9;
                case "k":
                    return (origTemp + 459.67) * 5 / 9 ;
                default:
                    return -999999
            }
        case "k":
            switch (resultType.tolowercase()) {
                case "c":
                    return origTemp - 273.15;
                case "f":
                    return origTemp * 9 / 5 - 459.67;
                default:
                    return -999999
            }
    }
}
module.exports = convertTemp;