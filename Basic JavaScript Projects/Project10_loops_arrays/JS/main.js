function Call_Loop() {
        var Number = "";
        var Y = 10;
        while (Y >= 0) {
            Number += "<br>" + Y;
            Y--;
        }
        document.getElementById("Loop").innerHTML = Number;
    }

function length_Function() {
    X = document.getElementById("howlong").value;
    WordLength = X.length;

    document.getElementById("outputLength").innerHTML = "It is " + WordLength + " characters long"
}

var Instruments = ["Oud", "Bouzouki", "Oboe", "Xylophone", "Accordion"]
var Content = "";
var Y;
function for_Loop() {;
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Types = [];
    Dog_Types[0] = "Husky";
    Dog_Types[1] = "Golden Retriever";
    Dog_Types[2] = "Akita";
    Dog_Types[3] = "Basset Hound";
    Dog_Types[4] = "Dachshund";

    document.getElementById("Array").innerHTML = "A " + Dog_Types[4] + " is a type of dog."
}

function constant_function() {
    const Good_Dog = {type: "dachshund", color: "cinnamon", height: "short", age: "3"};
    Good_Dog.age = "4";
    Good_Dog.length = "long";
    document.getElementById("Constant").innerHTML = "The color of the " + Good_Dog.type + " is " + Good_Dog.color 
    + ". The age is " + Good_Dog.age + ", and the length is " + Good_Dog.length + "."

}

function let_Function() {
let x = 2
window.alert(x)
}



function return_Function() {

    function return_Function2() {
        let x = 2;
        let y = 4;
        return x + y;
    }
    document.getElementById("Return").innerHTML = return_Function2();
}

let Jonesy_Cat = {
    type: "kitty", 
    breed: "American Bobtail", 
    age: "7 month old", 
    fur: "medium hair", 
    description: function() {
        return "Jonesy Cat is a " + this.age + this.fur + this.breed + this.type;
    }
}
document.getElementById("Jonesy_Cat_Object").innerHTML = Jonesy_Cat.description;