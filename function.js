function changePicture(index) {
    const carPicture = document.getElementById("car-picture");
    const carImage = document.getElementById("car-image");

    switch(index){
        case 0:
            carImage.setAttribute("src", "Cars/car1.webp");
            break;
        case 1:
            carImage.setAttribute("src","Cars/car2.webp");
            break;
        case 2:
            carImage.setAttribute("src", "Cars/car3.webp");
            break;
        case 3:
            carImage.setAttribute("src", "Cars/car4.webp");
            break;
        case 4:
            carImage.setAttribute("src", "Cars/car5.webp");
            break;


        default:
            carImage.setAttribute("src", "Cars/car5.webp");
    }

    changeDes(index)
}

    const carModel = document.getElementById("model");
    const carTrans = document.getElementById("transmission");
    const carYear = document.getElementById("year");
    const carDoors = document.getElementById("doors");
    const carAc = document.getElementById("ac");
    const carFuel = document.getElementById("fuel");
    const rentPrice = document.getElementById("rent");


function changeDes(index){
    let dataCar = {
        rent : 30,
        model :"Fiat 500",
        transmision: "Automatic",
        year : 2021,
        doors : 3,
        ac : "Yes",
        fuel : "Petrol"
    }


    switch(index){
        case 1:
            dataCar.rent = 50;
            dataCar.model = "Mercedes A class";
            dataCar.transmision = "Automatic";
            dataCar.year = 2018;
            dataCar.doors = 5;
            dataCar.ac = "Yes";
            dataCar.fuel = "Petrol";
            break;
        case 2:
            dataCar.rent = 50;
            dataCar.model = "BMW I3";
            dataCar.transmision = "Automatic";
            dataCar.year = 2019;
            dataCar.doors = 5;
            dataCar.ac = "Yes";
            dataCar.fuel = "Electric";
            break;
        case 3:
            dataCar.rent = 70;
            dataCar.model = "Hyundai Tucson";
            dataCar.transmision = "Automatic";
            dataCar.year = 2021;
            dataCar.doors = 5;
            dataCar.ac = "Yes";
            dataCar.fuel = "Hybrid";
            break;
        case 4:
            dataCar.rent = 100;
            dataCar.model = "Jeep Wrangler";
            dataCar.transmision = "Automatic";
            dataCar.year = 2022;
            dataCar.doors = 5;
            dataCar.ac = "Yes";
            dataCar.fuel = "Hybrid";
            break;
            

    }

    carModel.innerHTML = dataCar.model;
    carTrans.innerHTML = dataCar.transmision;
    carYear.innerHTML = dataCar.year;
    carDoors.innerHTML = dataCar.doors;
    carAc.innerHTML = dataCar.ac;
    carFuel.innerHTML = dataCar.fuel;
    rentPrice.innerHTML = dataCar.rent

}

