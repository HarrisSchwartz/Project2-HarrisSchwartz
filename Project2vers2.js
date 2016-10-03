/**
 *   @author Schwartz, Harris (hfschwartz21@gmail.com)
 *   @version 0.0.2
 *   @summary Project 2 code || created: 09.29.2016
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
let currentDay, currentMonth;

function main() {
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
        setCurrentDay();
        setCurrentMonth();
        setNumAccidents();
        setCustomerAge();
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
        continueResponse = Number(PROMPT.question(`\n\tIs this information correct? [0=Yes, complete Transaction; 1=No, Re-enter information]: `));
    } else {
        continueResponse = 1;
    }
}

function setFirstName() {
    firstName = PROMPT.question('\nPlease enter your first name: ');
}

function setLastName() {
    lastName = PROMPT.question('\nPlease enter your last name: ')
}

function setPolicyNum() {
    policyNum = Math.floor((Math.random() * 130) + 39);
}

function setBirthDay() {
    birthDay = Number(PROMPT.question('\nPlease enter the day of the month on which you were born: '));
}

function setBirthMonth() {
    birthMonth = Number(PROMPT.question('\nPlease enter the number of the month you were born: '));
}

function setBirthYear() {
    birthYear = Number(PROMPT.question('\nPlease enter the year you were born: '));
}

function setNumAccidents() {
    numAccidents = Number(PROMPT.question('\nHow many at-fault collisions have you been a part of in the last three years: '));
}

function setCurrentDay() {
    currentDay = Number(PROMPT.question('\nWhat is the day of the month today? '));
}

function setCurrentMonth() {
    currentMonth = Number(PROMPT.question('\nWhat is the current month (number)? '));
}

function setCustomerAge() {
    if (currentDay >= birthDay && currentMonth >= birthMonth || currentDay < birthDay && currentMonth > birthMonth) {
        customerAge = CURRENT_YEAR - birthYear;
    } else if (currentDay < birthDay && currentMonth < birthMonth || currentDay > birthDay && currentMonth < birthMonth) {
        customerAge = CURRENT_YEAR - 1 - birthYear;
    }
}

function setPremiumDueDay() {
    premiumDueDay = Number(currentDay);
}

function setPremiumDueMonth() {
    premiumDueMonth = Number(currentMonth + 1);
}

function setPremiumDueYear() {
    premiumDueYear = Number(CURRENT_YEAR);
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
    console.log(`\n\t${firstName  }${lastName}'s bill: \$${totalCost}. Policy#: ${policyNum}\n\tYour premium is due on ${premiumDueMonth}/${premiumDueDay}/${premiumDueYear}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc');
    console.log('\nThank you for your purchase.');
}