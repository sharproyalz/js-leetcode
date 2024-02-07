/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let highestMax = num;
    let convertedNum = num.toString().split("");
    for (let i = 0; i < convertedNum.length; i++) {
        convertedNum[i] === "9"
            ? (convertedNum[i] = "6")
            : (convertedNum[i] = "9");
        const joinedNumber = +convertedNum.join("");
        if (highestMax <= joinedNumber) {
            highestMax = joinedNumber;
        }
        convertedNum[i] === "9"
            ? (convertedNum[i] = "6")
            : (convertedNum[i] = "9");
    }
    return highestMax;
};
