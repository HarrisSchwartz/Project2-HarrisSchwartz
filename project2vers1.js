/**
 *   @author Schwartz, Harris (hfschwartz21@gmail.com)
 *   @version 0.0.1
 *   @summary Project 2 code || created: 09.27.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const BASE_PRICE = 100;
const AT_FAULT_FEE = 50;
const CURRENT_YEAR = 2016;

let continueResponse;
let policyNum, birthDay, birthMonth, birthYear, customerAge, premiumDueDay, premiumDueMonth, premiumDueYear, numAccidents, totalCost;
let firstName, lastName;

function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setFirstName();
        setLastName();
        setPolicyNum();
        setBirthDay();
        setBirthMonth();
        setBirthYear();
        setNumAccidents();
        calculateCustomerAge();
        setPremiumDueDay();
        setPremiumDueMonth();
        setPremiumDueYear();
        setTotalCost();
        printTotalCost();
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

function setFirstName() {
    firstName = PROMPT.question('\nPlease enter your first name ');
}

function setLastName() {
    lastName = PROMPT.question('\nPlease enter your last name ')
}

function setPolicyNum() {
    policyNum = Math.floor((Math.random() * 12) + 39);
}

function setBirthDay() {
    birthDay = Number(PROMPT.question('\nPlease enter the day of the month on which you were born '))
}

function setBirthMonth() {
    birthMonth = Number(PROMPT.question('\nPlease enter the number of the month you were born '))
}

function setBirthYear() {
    birthYear = Number(PROMPT.question('\nPlease enter the year you were born '))
}

function setNumAccidents() {
    numAccidents = Number(PROMPT.question('\nHow many at-fault collisions have you been a part of in the last three years '))
}

function calculateCustomerAge() {
    customerAge = (CURRENT_YEAR - birthYear);
}

function setPremiumDueDay() {
    premiumDueDay = Number(birthDay + 0)
}

function setPremiumDueMonth() {
    premiumDueMonth = Number(birthMonth + 1)
}

function setPremiumDueYear() {
    premiumDueYear = Number(CURRENT_YEAR + 1)
}

function setTotalCost() {
    totalCost = 0;
    const YOUNG_PERSON_FEE = 20,
        MEDIUM_PERSON_FEE = 10,
        OLD_PERSON_FEE = 30,
        YOUNG_PERSON_AGE = 30,
        MEDIUM_PERSON_AGE = 60,
        OLD_PERSON_AGE = 999;
    if (customerAge > 15) {
        if (customerAge > 15 && customerAge < YOUNG_PERSON_AGE) {
            totalCost = YOUNG_PERSON_FEE + BASE_PRICE + AT_FAULT_FEE * numAccidents;
        } else if (customerAge > YOUNG_PERSON_AGE && customerAge < MEDIUM_PERSON_AGE) {
            totalCost = MEDIUM_PERSON_FEE + BASE_PRICE + AT_FAULT_FEE * numAccidents;
        } else if (customerAge > MEDIUM_PERSON_AGE && customerAge < OLD_PERSON_AGE) {
            totalCost = OLD_PERSON_FEE + BASE_PRICE + AT_FAULT_FEE * numAccidents;
        }
    }
}

function printTotalCost() {
    process.stdout.write('\x1Bc');
    console.log(`\n\t${firstName }${lastName}'s bill: \$${totalCost}. Policy#: ${policyNum}\nYour premium is due on ${premiumDueDay}/${premiumDueMonth}/${premiumDueYear}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc');
    console.log('\n\tThank you for your purchase.')
}