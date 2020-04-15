


function Refresh(){

//for 1st dice    
var randomNo = Math.floor( Math.random() *6) + 1 

//for 2nd dice
var randomNo1 = Math.floor( Math.random() *6) + 1 


var randomImage = "images/" + "dice" + randomNo + ".png"

var randomImage1 = "images/" + "dice" + randomNo1 + ".png"


document.querySelectorAll("img")[0].setAttribute("src" , randomImage)


document.querySelectorAll("img")[1].setAttribute("src" , randomImage1)

if(randomNo > randomNo1 ){

    document.querySelector("h1").innerHTML ="Player1 Wins!!!"
}


else if(randomNo < randomNo1) {

    document.querySelector("h1").innerHTML ="Player2 Wins!!!"
}

else{

    document.querySelector("h1").innerHTML ="Draw!!"

}

}