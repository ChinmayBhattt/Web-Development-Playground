// https://www.mongodb.com/docs/manual/reference/cheatsheet/

// CRUD Operations

use("curdDB")
// console.log(db)
// db.createCollection("courses_tut")
// db.courses_tut.insertOne({
//     name: "Chinmay web dev",
//     price: 1000000,
//     assignments: 12,
//     projects: 45
// })

db.courses_tut.insertMany([
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
 )


// READ---------
// let a = db.courses_tut.find({year: 1995})
// console.log(a)
// console.log(a.count())

// let b = db.courses_tut.find({year: 1995})
// // console.log(b.toArray())
// console.log(b)

// let b = db.courses_tut.findOne({year: 1995})
// // console.log(b.toArray())
// console.log(b)



// UPDATE---------

// db.courses_tut.updateOne({year: 1995}, {$set; {year: }})
// db.courses_tut.updateOne({"year": 1995}, {$set: {"year": 2016}})

// db.courses_tut.updateMany({"year": 1995}, {$set: {"year": 2016}})


// DELETE---------

// db.courses_tut.deleteOne({"year": 1972})
db.courses_tut.deleteMany({"year": 1979})

// https://www.mongodb.com/docs/manual/reference/cheatsheet