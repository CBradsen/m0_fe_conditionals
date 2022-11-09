var goodDrivingRecord = true;
var age = 24;

if (goodDrivingRecord === true && age > 25) {
    console.log("You get a discount on your car rental today because you have a good driving record and are older than 25.");
} else if (goodDrivingRecord !== true && age >= 25, goodDrivingRecord === true && age <=25) {
    console.log("This user must pay fullprice on the car rental.");
} else if (goodDrivingRecord !== true && age <= 25) {
    console.log("This driver must have someone else sign for the rental.");
}
