function myFunction() {
    document.getElementById("first").innerHTML = "";
};

function hasNumber(myString) {
    return /\d/.test(myString);
};

function checkStringForNumbers(input) {
    let str = String(input);
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str.charAt(i))) { //if the char is a number, do the following
            return true;
        }
    }
};

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};

function modifyCase(str) {
    var newString = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            newString += str[i].toLowerCase()
        } else {
            newString += str[i].toUpperCase()
        };
    }
    return newString;
};

function popup() {
    var person = prompt("Enter username:", "");


    if (checkStringForNumbers(person)) {

        person = reverseString(person);

    } else {

        person = modifyCase(person);
    };

    document.getElementById("first").innerHTML = person;

    /*
    checking username for the numbers
    If username contain number, display the name backwards. Else translate letters 
    through a symbol to upper or lower case( LiKe_tHaT)
    */


}