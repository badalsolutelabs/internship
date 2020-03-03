#!/usr/bin/env node

"use strict";

var util = require("util");
var path = require("path");
var fs = require("fs");
// var getStdin = require("get-stdin");
var Transform = require("stream").Transform;
var zlib = require("zlib");

var BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

var OUTFILE = path.join(BASE_PATH, "out.txt");

var args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in", "out", "compress", "uncompress"],
  string: ["file"]
});

if (args.help) {
  printHelp();
} else if (args.file) {
  let stream = fs.createReadStream(path.join(BASE_PATH, args.file));
  processFile(stream);
} else if (args.in || args._.includes("-")) {
    // getStdin().then(processFile).catch(error)
    processFile(process.stdin);
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
  console.log("ex2 usaage:");
  console.log(" ex2.js --file={FILENAME}");
  console.log();
  console.log("--help               print this help");
  console.log("--file               process file");
  console.log("--in                 process stdin");  
  console.log("--out                print too stdout");
  console.log("--compress           gzip output");
  console.log("--uncompress         ungzip");
}
function processFile(inStream) {
  var outStream = inStream;
  
  if(args.uncompress){
    let gunzip = zlib.createGunzip();
    outStream = outStream.pipe(gunzip);
  }

  var upperStream = new Transform({
    transform(chunk, enc, cb){
      this.push(chunk.toString().toUpperCase());
      cb();
    } 
  });

  outStream = outStream.pipe(upperStream);

  if(args.compress){
    let gzipStream = zlib.createGzip();
    outStream = outStream.pipe(gzipStream);
    OUTFILE = `${OUTFILE}.gz`;
  }

  var targetStream;
  if(args.out){
    targetStream = process.stdout;
  }
  else{
    targetStream = fs.createWriteStream(OUTFILE);
  }

  outStream.pipe(targetStream);
}
