function changePicture(index) {
    const carPicture = document.getElementById("car-picture");

    switch(index){
        case 0:
            carPicture.style.backgroundColor = "red";
            break;
        case 1:
            carPicture.style.backgroundColor = "green";
            break;
        case 2:
            carPicture.style.backgroundColor = "blue";
            break;

        default:
            carPicture.style.backgroundColor = "red";
    } 
  }
