#!/usr/bin/env node

"use strict";

var util = require("util");
var path = require("path");
var fs = require("fs");
var getStdin = require("get-stdin");

var BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: ["file"]
});

if (args.help) {
  printHelp();
} else if (args.file) {
  fs.readFile(path.join(BASE_PATH, args.file), function(err, contects) {
    if (err) error(err.toString());
    processFile(contects.toString());
  });
} else if (args.in || args._.includes("-")) {
    getStdin().then(processFile).catch(error)
} else {
  error("Incorrect usage", true);
}

function error(msg, incluedeHelp = false) {
  console.error(msg);
  if (incluedeHelp) {
    console.log("");
    printHelp();
  }
}

function printHelp() {
  console.log("ex1 usaage:");
  console.log(" ex1.js --file={FILENAME}");
  console.log();
  console.log("--help         print this help");
  console.log("--file         process file");
  console.log("--in           process stdin");  
}
function processFile(contects) {
    contects = contects.toUpperCase();
    process.stdout.write(contects);
}
