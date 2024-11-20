//question 1
console.log("For loop example:");
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];

for (let i = 0; i <=3;i++) {
    console.log(characters);
}
//Question 2
let firstName = 'Harry';
let house = 'Gryffindor';
console.log("Welcome, Harry of Gryffindor!");

//question 3ss
let characterName = 'Hermione';


console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

//question 4
let spell = 'Expelliarmus';
console.log(spell.trim());

//question 5
let quote = 'IsolemnlyswearthatIamuptonogood';
console.log(quote.slice(9, 14));

//question 6
let FirstName = 'Ron';
let lastName = 'Weasley';
console.log(FirstName.concat (lastName));

//question 7
let sentence = 'Draco is a good wizard';
console.log(sentence.replace ('good','bad'))

//question 8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

//question 9
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

//question 10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let selectedProfessors = professors.slice(1, 3);
console.log(selectedProfessors);

//question 11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2);
console.log(students);

//question 12
let phrase = ' Mischief Managed ';
let results = phrase.trim().toLowerCase() + ' - Harry';
console.log(results);

//question 13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

//question 14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let extractedWord = message.slice(11, 19);
let result = extractedWord.concat(' Castle');
console.log(result);