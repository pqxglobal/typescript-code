var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 1] = "Brown";
    EyeColor[EyeColor["Green"] = 5] = "Green";
    EyeColor[EyeColor["Blue"] = 10] = "Blue";
})(EyeColor || (EyeColor = {}));
var myEyeColor = EyeColor.Brown;
console.log(myEyeColor);
// console.log(myEyeColor[myEyeColor]);
