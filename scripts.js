 let name = 'Kriszti';


 console.log(name + " says nyenye");
 console.log('Hello world!')

 $('h1').text('We are having a 10 minute brake until 20:30')
 $('p').html('StayAtHome Coding Camp, Likes:<strong>13</strong>');

 $('strong').css('background', 'lime')
 $('strong').css('padding', '10px')

let color = 'blue';

 $('h2').toggleClass(color);
 $('h2').toggleClass(color);

 $('ul').append('<li>My name is ' + name + ' </li>');
 $('ul').append('<li id="special-list-item">Removable ' + name + ' </li>');

 $('#special-list-item').remove(); 


let addButtonHandler = () => {
    if ($('li').length < 5) {
    $('ul').append('<li>My name is ' + name + ' </li>');
}
};

$('#add-button').click(addButtonHandler);

$('#remove-button').click(() => {
    $('li:last-child').remove();
});


// This is part four

let age = 12;

console.log('Starting the if');
console.log('This Is a Sentence');



if (age < 18) {
  console.log('Not old enough to drink')
} else {
  console.log('Old enough to drink')
}

console.log('This is afther the if');

 // This is a JavaScript comment

 /*
 This is a multiline 
 JavaScript comment
 */
 
 /* 
name = 'Kriszti'
"Kriszti"
age = 26
26
oldEnoughToDrive = true
true
person = {
name: 'Kriszti',
age: 26,
oldEnoughToDrive: true
}
{name: "Kriszti", age: 26, oldEnoughToDrive: true}
person.name
"Kriszti"
person.age +12
38
person.name = 'Lajos'
"Lajos"
person
{name: "Lajos", age: 26, oldEnoughToDrive: true}
age
26
oldEnoughToDrive
true
person.naem = 'Krinya'
"Krinya"
person.favoriteColors = ['yellow', 'Blue']
(2) ["yellow", "Blue"]
person {name: "Lajos", age: 26, oldEnoughToDrive: true, naem: "Krinya", favoriteColors: Array(2)}
age: 26
favoriteColors: (2) ["yellow", "Blue"]
naem: "Krinya"
name: "Lajos"
oldEnoughToDrive: true
__proto__: Object
*/