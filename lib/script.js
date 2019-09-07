// script are here

// Car constructor . 
class Car {
    constructor(brand, model, mYear, km, color) {
        // properties
        this.brand = brand;
        this.model = model;
        this.mYear = mYear; // Manufactured year
        this.km = km;
        this.color = color;

    }

    carList() {
        return this.brand + " " + this.model;
    }


    // methods - KM per year ( KM / (Curent year - Manufactured year) )
    kmPerYear() {
        var curentYear = new Date().getFullYear();
        // return 10 / (8-6); 
        return (this.km / (curentYear - this.mYear)).toFixed(0);
    }

}

// Car list data ***************
var car1 = new Car("Toyota", "corola", 2000, 80000, "red");
var car2 = new Car("BMW", "M3", 2010, 120000, " grey");
var car3 = new Car("Mercedes", "CLA", 2015, 45000, "white");


// Car list data using JSON file ************
$.ajax({
    dataType: "json",
    url: data.json,
    data: new Car,
    success: success
  });

var curentYear = new Date().getFullYear();

console.log(car1, car2, car3);
console.log(car1.kmPerYear());
console.log(car2.kmPerYear());
console.log(car3.kmPerYear());
console.log(car1.carList());
console.log(Car.length);
console.log(curentYear);

//KM per year per car **********************
function mostDrivenCar() {

    for (var i = 1, len = Car.length; i <= len; i++) {
        console.log(len);
        console.log(i);
        carKM1 = car1.kmPerYear();
        carKM2 = car2.kmPerYear();
        carKM3 = car3.kmPerYear();
        kmPerYear1 = Math.max(carKM1, carKM2, carKM3);
        if (carKM1 == kmPerYear1) {
            console.log(car1.brand + " " + carKM1);
            document.getElementById("brand1").innerHTML = car1.brand + " " + carKM1 + "<br>";
        }
        else if (carKM2 == kmPerYear1) {
            console.log(car2.brand + " " + carKM2);
            document.getElementById("brand2").innerHTML = car2.brand + " " + carKM2 + "<br>";
        }
        else {
            console.log(car3.brand + " " + carKM3);
            document.getElementById("brand3").innerHTML = car3.brand + " " + carKM3 + "<br>";
        }
    }
    // console.log(carKM1);
    // console.log(carKM2);
    // console.log(carKM3);
    // document.getElementById("brand1").innerHTML = car1.brand + " " + carKM1 + "<br>";
    // document.getElementById("brand2").innerHTML = car2.brand + " " + carKM2 + "<br>";
    // document.getElementById("brand3").innerHTML = car3.brand + " " + carKM3 + "<br>";

    console.log(kmPerYear1);
}


//Create the table with data *********
// function createTable() {
//     var table = document.getElementById("carTable");
//     for (var i = 2, j = 0; i < Car.length; i++ , j++) {
//         var row = table.insertRow(i);
//         var cell6 = row.insertCell(0);
//         var cell5 = row.insertCell(0);
//         var cell4 = row.insertCell(0);
//         var cell3 = row.insertCell(0);
//         var cell2 = row.insertCell(0);
//         var cell1 = row.insertCell(0);
//         cell1.innerHTML = i;
//         cell2.innerHTML = car1.brand;
//         cell3.innerHTML = car1.model;
//         cell4.innerHTML = car1.mYear;
//         cell5.innerHTML = car1.km;
//         cell6.innerHTML = car1.color;
//     }
// }

//Enter a new car to the table ******
function enterNewCar() {
    var car4 = new Car(document.getElementById("brand1").value);
    var car4 = new Car(document.getElementById("model1").value);
    var car4 = new Car(document.getElementById("mYear1").value);
    var car4 = new Car(document.getElementById("km1").value);
    var car4 = new Car(document.getElementById("color1").value);
    console.log(car4);

}






