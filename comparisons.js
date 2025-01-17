// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("The number of teachers is less than the number of students. True or False?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("The nunber of Teachers is strictly equal to the stringTeachers. True or False?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("The number of teachers is not equal to the number of students. True or False?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Are there 20 or more students?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Are there 21 or more students?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("There are 20 or less students?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("The number of students is less than or equal to 21? True or False.", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9); 
console.log("Here the code is asking: Is the number 4 less than 9?");
// YOU DO: Explain.
 
var books = 3;
console.log(4 < books);
console.log("The code is showing if the number 4 is less than the number of books.");

// YOU DO: Explain.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
console.log("The code is discerning if the number of friends are greater than siblings");

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
console.log("Is the number of people attending not stricly equal to the number of meals.");

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);


// Determine if the dog loves to play and loves the dog park
console.log("Does the dog love to play and love the dog park?", lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park

console.log("The dog loves to play or loves the dog park.", lovesToPlay || lovesDogPark);
// Determine if the dog loves to play and is a puppy
console.log("This dog loves to play and is a puppy (less than one-year old  ). True or False", lovesToPlay && age < 1);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: The final line was false because I decided that a puppy was under 1 year old and wrote it to answer according to that definition. 