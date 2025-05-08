var Num = prompt("Enter any number: ");
var numStr = parseInt(Num, 10);
switch (true) {
    case numStr >= 80 && numStr <= 100:
        console.log("You scored an A");
        break;
    case numStr >= 70 && numStr <= 89:
        console.log("You scored an B");
        break;
    case numStr >= 60 && numStr <= 69:
        console.log("You scored an C");
        break;
    case numStr >= 50 && numStr <= 59:
        console.log("You scored an D");
        break;
    case numStr >= 0 && numStr <= 49:
        console.log("You scored an F");
        break;
}
