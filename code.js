$(document).ready(function() {


// Object containing the validation rules
var myRules =
    {
        heightInch:{
            required: true,
            min:59,
            max:79,
            digits: true
        },
        weightPounds:{
            required: true,
            min:88,
            max:353,
            digits: true
        }
    };

// Object containing the error messages
var myMessages =
    {
        heightInch: {
            required: "Must be a number, can't be negative, Height is required.",
            min: "Must be a number, can't be negative, or too short.",
            max: "Must be a number, can't be negative, or too tall.",
            digits: true
        },
        weightPounds: {
            required: "Must be a number, can't be negative, Weight is required.",
            min: "Must be a number, can't be negative, or must weight more.",
            max: "Must be a number, can't be negative, or too much weight.",
            digits: true
        }

    };

// Pass the configuration to the form's validate() method
// Needs submitHandler, rules, and messages properties
$("form").validate(
    {
        submitHandler: calculateBMI,
        rules: myRules,
        messages: myMessages
    }
);

function calculateBMI() {

    var bmi = 0;
    var weightSquaredResult = 0;
    var weightTimesNumber = 0;
    var heightInchVar = $("#heightInch").val();
    var weightVar = $("#weightPounds").val()

    // underweight (under 18.5 kg/m2),
    // normal weight (18.5 to 25),
    // overweight (25 to 30),
    // and obese (over 30).[1]

    weightSquaredResult = heightInchVar * heightInchVar;

    weightTimesNumber = weightVar * 703;
    $("img").hide()
    bmi =  (parseFloat(weightTimesNumber) / parseFloat(weightSquaredResult)).toFixed(1);

    if(bmi < 18.5){   $("p").text(`${bmi} : underweight (under 18.5 kg/m2) `)}
    if(bmi > 18.5 && bmi <25.0){   $("p").text(`${bmi} : normal weight (18.5 to 25) `)}
    if(bmi > 25.0 && bmi <30.0){   $("p").text(`${bmi} : overweight (25 to 30) `)}
    if(bmi > 30.0){   $("p").text(`${bmi} : obese (over 30)) `)}


}});





