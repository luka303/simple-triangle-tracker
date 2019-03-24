function triangle (sideA,sideB,sideC) {
    var sideA = prompt("Enter a value for side A: ");
    var sideB = prompt("Enter a value for side B: ");
    var sideC = prompt("Enter a value for side C: ");

    var a = parseInt(sideA);
    var b = parseInt(sideB);
    var c = parseInt(sideC);

    if (isNaN(sideA)) {
       alert("Please enter numbers only!");
    }
    if (sideA<=0 ||sideB<=0 || sideC<=0){
      alert("Values too small to form a triangle");
    }
    if (sideA + sideB <= sideC || sideA +sideC <= sideB || sideB + sideC <= sideA) {
      alert("Not a triangle.The sum of two sides should not be greater than the third")
    }

    if (a===b && b===c && c===a) {
        alert("Equilateral");
    }
    else if (a===b && a!==c && b!==c || b===c && b!==a && c!==a || a===c && a!==b && b!==c) {
        alert("isosceles");
    }
    else if(a!==b && b!==c && c!==a)  {
        alert("scalene");
    }
    else{
        alert("Not a Number");
    }
}
triangle();



(sideA===null || sideB===null || sideC===null)
