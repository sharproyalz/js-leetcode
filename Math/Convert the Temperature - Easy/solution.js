/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    kelvin = celsius + 273.15;
    fahrenheit = celsius * 1.8 + 32.0;

    return [kelvin, fahrenheit];
};
