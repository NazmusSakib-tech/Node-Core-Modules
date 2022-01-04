const { test } = require('./people')
const lodash = require('lodash')
const people = require('./people')
const path = require('path')
const os = require('os')

const myPath = "C:/project/node-local-mongose/index.js"
const myOs =
    // console.log("test")
    // console.log(people)
    // console.log(lodash.last(people.name));
    // console.log(abc)
    // test();
    console.log(path.extname(myPath))
console.log(os.cpus())