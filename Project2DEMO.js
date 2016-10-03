/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 3 demo code || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let custID, dogAge, dogWeight, totalBill;
let dogName, dogBreed;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setCustID();
        setDogName();
        setDogBreed();
        setDogAge();
        setDogWeight();
        setTotalBill();
        printTotalBill();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
    } else {
        continueResponse = 1;
    }
}

function setCustID() {
    custID = Math.floor((Math.random() * 10) + 1);  //JavaScript random number 1 - 20
}

function setDogName() {
    dogName = PROMPT.question(`\nPlease enter dog's name: `);
}

function setDogBreed() {
    dogBreed = PROMPT.question(`\nPlease enter dog's breed: `);
}

function setDogAge() {
    dogAge = Number(PROMPT.question(`\nPlease enter dog's age: `));
}

function setDogWeight() {
    dogWeight = Number(PROMPT.question(`\nPlease enter dog's weight: `));
}

function setTotalBill() {
    totalBill = 0;
    const YOUNG_PERSON_FEE = ,
        MEDIUM_DOG_FEE = 75,
        LARGE_DOG_FEE = 105,
        JUMBO_DOG_FEE = 125,
        SMALL_DOG_WEIGHT = 15,
        MEDIUM_DOG_WEIGHT = 30,
        LARGE_DOG_WEIGHT = 80;
    if (dogWeight > 0) {
        if (dogWeight > 0 && dogWeight < SMALL_DOG_WEIGHT) {
            totalBill = SMALL_DOG_FEE + dogAge;
        } else if (dogWeight < MEDIUM_DOG_WEIGHT) {
            totalBill = MEDIUM_DOG_FEE + dogAge;
        } else if (dogWeight < LARGE_DOG_WEIGHT) {
            totalBill = LARGE_DOG_FEE + dogAge;
        } else {
            totalBill = JUMBO_DOG_FEE + dogAge;
        }
    }
}

function printTotalBill() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${dogName}'s bill: \$${totalBill}. Customer#: ${custID}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}

/*
 This program is designed to prompt customer for basic information about their dog, calculate the price, then output
 the total bill.
 */