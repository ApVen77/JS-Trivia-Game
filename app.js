// An object is an unordered list of data types that is stored as a series of 
// name-value pairs. Each item in the list is called a property 
// (functions are called methods). 

//strings, numbers, arrays, booleans, functions(methods)

//Meet one of my siblings...

//Creating a JS Object 
//object literal

var sibling = {
    name: "Ebony",
    age: 38,
    children: ["Sky", "Kelis", "Brandon"],
    isSingle: false, 
    email: 'ebsuperfly@msn.com'
 }


    //object constructor
    var sibling= new Object();
    sibling.name= "Ebony";
    sibling.age= 38;
    sibling.children= ["Sky", "Kelis", "Brandon"];
    sibling.isSingle= false;
    sibling.email= 'ebsuperfly@msn.com'; 


//passing argument/methods into functions
function meetSibling() {
    console.log('My name is' + " " +  sibling.name); 
}

meetSibling(sibling); 



//Accessing Objects
//dot notation 
// document.write('My name is ' + sibling.name + ' I am ' + sibling.age + ' years old'); 
//bracket notation
// document.write('My name is ' + sibling[" name"] + 'My email is ' + sibling[" email"]); 
//see all keys/valus in an object
// for in loop 
// for (key in sibling) {
//     document.write(key); 
// }
// document. write (Object.keys(sibling)); 
// document.write (Object.values(sibling)); 




//Changing, Updating, and Deleting Objects 

// A Recipe Card
// Create an object to hold information on your favorite recipe. It should have 4
// // properties including (a string), (a number), (an array of strings), and 1 more.
// // On separate lines (one console.log statement for each), log the recipe information. 

var recipe = {
    title: "Chicken Bacon Ranch Pasta",
    servingSize: 4,
    ingredients: ["bowtie pasta", "ranch seasoning", "bacon", "chicken breast", "garlic", "milk"],
     calories:  200
}

console.log('This recipe is ' + recipe.title); 
console.log('This feeds ' + recipe.servingSize); 
console.log('The calories for this dish is ' + recipe.calories); 
console.log ('Here are the ingredients ' + recipe.ingredients); 






// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for
//  the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. 
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [
    {title:"Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    alreadyRead: true
},
{title: "The Power of Now",
author: "Eckhart",
alreadyRead: false
},
{title: "You are a Badass",
author: "Jen Sincero",
alreadyRead: false
}
];
for (i=0; i<books.length; i++) {
    var book= books [i];
    var bookInfo= book.title + ' by ' + book.author;
    if (book.alreadyRead) {
        document.write (' You read ' + bookInfo);
    }
    else {
        document.write (' You still need to check out' + bookInfo + '<br>');
    }
}; 

 var greet= "hello";
 console.log (greet); 


// var books= [
//     {title: "Steps to Academic Writing",
//     author: "Jean Zukowski",
//     alreadyRead: false
//     },

//     { title: "A Promise Land",
//     author: "Barack Obama",
//     alreadyRead: false

//     }, 

//     { title: "The Old Man and the Sea",
//     author: "Ernest Hemingway",
//     alreadyRead: true 

//     }
// ];

// for (i=0; i<books.length; i++) {
//     var book= books[i];
//     var bookInfo= book.title + "by " + book.author; 
//     if (book.alreadyRead) {
//         document.write("You read " + bookInfo);
//     }
//     else {
//         document.write("You still need to check out " + bookInfo + '<br>'); 
//     }


