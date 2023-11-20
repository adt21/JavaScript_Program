function bmiCalculator(weight, height){
    var bmi = Math.floor(weight/ Math.pow(height, 2));
    return bmi;
}
var ans = bmiCalculator(60, 5.5);
console.log(ans);