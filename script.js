let myGrades = [100, 100, 90, 73, 78, 94, 86];

let myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

//first run, my grade average is not a number. just looking at it visually, mygrades and myaverage are not defined by let so its not really allocating memory for it or anything

//2nd run with step through finds the loop loops too far i believe, probably either because it starts i=1 and it goes until i<=my.grades, which i think is 2 too far, since it skips the first 100 and also if you fix it to i=0, going to <= length means the length is 7, but its 0 indexed so should be 6.


function validNumber(num) {
    if (isNaN(num)){
        throw new Error("Enter a valid Number");
    } else {
        console.log("valid!");
    }
}

validNumber(NaN);