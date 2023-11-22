function bmiCalculator (weight, height) {
    var interpretation = Math.floor(weight/ Math.pow(height, 2));
    if(interpretation < 18.5){
        return ("Your BMI is " + interpretation + ", so you are underweight.");
    }
    if(interpretation >= 18.5 && interpretation <= 24.9){
        return ("Your BMI is " + interpretation + ", so you have a normal weight.");
    }
    if(interpretation > 24.9){
        return ("Your BMI is " + interpretation + ", so you are overweight.");
    }
    else{
        return interpretation;
    }
    
}
var weight = 60;
var height = 5.5;
var ans = bmiCalculator(weight, height);
console.log(ans);
