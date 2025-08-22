/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  [
  {
    "Name": "C",
    "year": 1972,
    "Addition": "Procedural"
  },
  {
    "Name": "C++",
    "year": 1979,
    "Addition": "OOPS"
  },
  {
    "Name": "Java",
    "year": 1995,
    "Addition": "Platform Independent"
  },
  {
    "Name": "Python",
    "year": 1991,
    "Addition": "Easy Syntax"
  },
  {
    "Name": "JavaScript",
    "year": 1995,
    "Addition": "Web Development"
  },
  {
    "Name": "Ruby",
    "year": 1995,
    "Addition": "Simplicity"
  },
  {
    "Name": "Go",
    "year": 2009,
    "Addition": "Concurrency"
  },
  {
    "Name": "Rust",
    "year": 2010,
    "Addition": "Memory Safety"
  },
  {
    "Name": "Kotlin",
    "year": 2011,
    "Addition": "Android Friendly"
  },
  {
    "Name": "Swift",
    "year": 2014,
    "Addition": "iOS Development"
  }
]

]);


// Print a message to the output window.
console.log(`DataBase Confirm`);

