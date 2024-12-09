let BirthYear = prompt("What year you are born?");
let Years = parseInt(BirthYear);
let ChineseZodiac = (Years - 4) % 12;

if (ChineseZodiac = 0) {
    alert("You are Rat");
} else if (ChineseZodiac = 1) {
    alert("You are Ox");
}else if (ChineseZodiac = 2) {
    alert("You are Tiger");
}else if (ChineseZodiac = 3) {
    alert("You are Rabbit");
}else if (ChineseZodiac = 4) {
    alert("You are Dragon");
}else if (ChineseZodiac = 5) {
    alert("You are Snake");
}else if (ChineseZodiac = 6) {
    alert("You are Horse");
}else if (ChineseZodiac = 7) {
    alert("You are Goat");
}else if (ChineseZodiac = 8) {
    alert("You are Monkey");
}else if (ChineseZodiac = 9) {
    alert("You are Rooster");
}else if (ChineseZodiac = 10) {
    alert("You are Dog");
}else if (ChineseZodiac = 11) {
    alert("You are Pig");
} else {
    alert("Are you even Born?");
}