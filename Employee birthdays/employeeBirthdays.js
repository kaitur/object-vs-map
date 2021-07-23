const moment = require("moment");
const csv = require('csv-parser');
const fs = require('fs');

let currentYear = moment().year();
let currentMonth = moment().month();
let index = process.argv[2];
let filePath = process.argv[3];

//#region Reading CSV-file
let arrayOfEmployees = [];

fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => arrayOfEmployees.push(data))
    .on('end', () => {

        for (let i = 0; i < arrayOfEmployees.length; i++) {
            arrayOfEmployees[i].birthdays = moment([arrayOfEmployees[i].year, arrayOfEmployees[i].month, arrayOfEmployees[i].day]);
        }
        consoleOutput(index, arrayOfEmployees);
    });
//#endregion

function numberOfYearse(arrayOfEmployees, n) {
    let numOfYearse = currentYear - arrayOfEmployees[n].birthdays.year();
    return moment().month() <= arrayOfEmployees[n].birthdays.month() ? numOfYearse : ++numOfYearse;
}
/*
function displayOfTheMonthInText(arrayOfEmployees, n) {
    let monthInText = arrayOfEmployees[n].birthdays.locale('ru').format('MMMM');
    return monthInText[0].toUpperCase() + monthInText.slice(1);
}
*/
function displayOfTheMonthInText(i) {
    let month = moment().add(i, 'month').locale('ru').format('MMMM');
    let monthInText = month[0].toUpperCase() + month.slice(1);
    return monthInText;
}

function displayOfTheYear(i) {
    return currentMonth + i <= 11 ? currentYear : currentYear + 1;
}

function oversupplyCheck(monthValue) {
    let monthForWithdrawal = currentMonth + monthValue;
    return monthForWithdrawal <= 11 ? monthForWithdrawal : monthForWithdrawal - 11;
}

function arrayEmplCurrMonth(index, arrayOfEmployees) {
    let sortedArray = sortByMonth(arrayOfEmployees);
    let oneMonthArray = [];
    let count = 0;

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i].birthdays.month() == oversupplyCheck(index)) {
            oneMonthArray[count] = sortedArray[i];
            count++;
        }
    }

    return oneMonthArray;
}

function sortByMonth(arrayOfEmployees) {
    let arrayOfEmployeess = arrayOfEmployees;
    let sortedArray = arrayOfEmployeess.sort((a, b) => { return moment(a.birthdays.month()).diff(b.birthdays.month()) });
    return sortedArray;
}

function sortByDay(index, arrayOfEmployees) {
    let arrayOfEmployeess = arrayEmplCurrMonth(index, arrayOfEmployees);
    let sortedArrayByDay = arrayOfEmployeess.sort((a, b) => { return moment(b.birthdays.date()).diff(a.birthdays.date()) });
    return sortedArrayByDay;
}

function endingOfTheWord(quantity) {
    if (quantity == 0 || (quantity % 10) == 0 || (quantity >= 5 && quantity <= 20) || (quantity % 10 >= 5 && quantity % 10 <= 20)) return "лет";
    else if (quantity == 1 || (quantity % 10) == 1) return "год";
    else if ((quantity >= 2 && quantity <= 4) || (quantity % 10 >= 2 && quantity % 10 <= 4)) return "года";
}

function consoleOutput(index, arrayOfEmployees) {
    for (let i = 0; i <= index; i++) {
        let oneMonthArray = sortByDay(i, arrayOfEmployees);
        let text = `${displayOfTheMonthInText(i)} ${displayOfTheYear(i)}`;
        console.log(text);
        for (let j = oneMonthArray.length - 1; j >= 0; j--) {
            let text_2 = `(${oneMonthArray[j].birthdays.date()}) - ${oneMonthArray[j].name} (${numberOfYearse(oneMonthArray, j)} ${endingOfTheWord(numberOfYearse(oneMonthArray, j))})`;
            console.log(text_2);
        }
    }
}
/*export {
    numberOfYearse as funcNumberOfYearse,
    displayOfTheMonthInText as funcDisplayOfTheMonthInText,
    displayOfTheYear as funcDisplayOfTheYear,
    endingOfTheWord as funcEndingOfTheWord
};*/