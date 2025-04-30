// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: Apr 2025
// This file contains the JS functions for index.html


/**
* This function tells you if you get a student discount
*/
// eslint-disable-next-line no-unused-vars


function findTypeOfTriangle() {
 // input
const lengthANumber = prompt("Enter length A of the triangle (mm):")
const lengthBString = prompt("Enter length A of the triangle (mm):")
const lengthCString = prompt("Enter length A of the triangle (mm):")

const lengthA = parseFloat(lengthANumber)
const lengthB = parseFloat(lengthBString)
const lengthC = parseFloat(lengthCString)

// using the cosine law
const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)

const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

console.log(angleA)
console.log(angleB)
console.log(angleC)
console.log(sumOfAngles)

 // process
if (daysNumber === 'Tuesday' || daysNumber === 'Thursday' || (userAge > 12 && userAge < 21)) {
   // output
  document.getElementById('result').innerHTML =
  "You get the student discount for the museum.";
  } else {
   // output
  document.getElementById('result').innerHTML =
  "You pay the regular price";
  }
}
