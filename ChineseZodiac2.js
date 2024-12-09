let BirthYear = prompt("What year you are born?");
let intYears = parseInt(BirthYear);
let ChineseZodiac = (intYears - 4) % 12;

switch(ChineseZodiac){
    case "ChineseZodiac == 0":
        alert("You are Rat");
        break;
    case "ChineseZodiac == 1":
        alert("You are Ox");
        break;
    case "ChineseZodiac == 2":
        alert("You are Tiger");
        break;
    case "ChineseZodiac == 3":
        alert("You are Rabbit");
        break;
    case "ChineseZodiac == 4":
        alert("You are Dragon");
        break;
    case "ChineseZodiac == 5":
        alert("You are Snake");
        break;
    case "ChineseZodiac == 6":
        alert("You are Horse");
        break;
    case "ChineseZodiac == 7":
        alert("You are Goat");
        break;
    case "ChineseZodiac == 8":
        alert("You are Monkey");
        break;
    case "ChineseZodiac == 9":
        alert("You are Roster");
        break;
    case "ChineseZodiac == 10":
        alert("You are Dog");
        break;
    case "ChineseZodiac == 11":
        alert("You are Pig");
        break;
    default:
        alert("are you alive?");
}
