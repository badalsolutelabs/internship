// TODO: write the validation functions

function isValidName(name){
    // if(typeof name !== "string"){
    //     return false;
    // }
    // else if(name.length == 0){
    //     return false;
    // }
    // else if(name.indexOf(" ") != -1 && name.length < 3){
    //     return false
    // }
    // return true;

    if(typeof name == "string" && name.trim().length >= 3){
        return true;
    }
    return false;
}

function hoursAttended(x, y){
    if(typeof x == "string" && x.trim() != ""){
        x = Number(x);
    }

    if(typeof y == "string" && y.trim() != ""){
        y = Number(y);
    }

    if(typeof x == "number" &&
       typeof y == "number" &&
       x >= 0 &&
       y >= 0 &&
       Number.isInteger(x) &&
       Number.isInteger(y) &&
       x <= y){
        return true;
    }
    return false;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);