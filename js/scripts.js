function triangle (sideA,sideB,sideC) {
    var sideA = prompt("Enter a value for side A: ");
    var sideB = prompt("Enter a value for side B: ");
    var sideC = prompt("Enter a value for side C: ");

    var a = parseInt(sideA);
    var b = parseInt(sideB);
    var c = parseInt(sideC);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
       alert("Please enter numbers only!");
    }
    if (sideA<=0 ||sideB<=0 || sideC<=0){
      alert("Values too small to form a triangle");
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
