/********************
 * YOUR CODE BELOW! *
 ********************/
const iGetTheJoke = true;
const havingFun = false;
const learning = true;
const killingIt = false;

function returnFalse (parameterIsnot) {
  return parameterIsnot = false;
}

function isOpposite (adverse) {
  return adverse != true || false;
}

function both (x, y) {
  return x && y == true;
}

function either (x, y) {
  return x || y == true;
}

function firstOnly (x, y) {
  return x == true && y == false  == true;
}

function secondOnly (x, y) {
  return x == false && y == true == true;
}

function neither (x, y) {
  return !x && !y == false && x && y == true || x == false && y == false ;
}

function itsComplicated (x, y, z) {
  return x == false || y == true && z == true == true;
}
/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}