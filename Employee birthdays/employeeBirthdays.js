const moment = require("moment");

let monthInAdvance = 11;
let currentYear = moment().year();
let currentMonth = moment().month();
let currentDay = moment().date();

function addingEmployeesToTheArray() {
    let vera = { name: "Бондарева Вера", birthdays: moment([2000, 6, 20]) };
    let vika = { name: "Васильева Виктория", birthdays: moment([1989, 5, 12]) };
    let malika = { name: "Кузнецова Малика", birthdays: moment([1981, 4, 12]) };
    let anna = { name: "Петрова Анна", birthdays: moment([1973, 1, 5]) };
    let maks = { name: "Белов Максим", birthdays: moment([1984, 1, 7]) };
    let artem = { name: "Федосеев Артём", birthdays: moment([1971, 1, 28]) };
    let lila = { name: "Овчинникова Лиля", birthdays: moment([1973, 1, 17]) };
    let mark = { name: "Емельянов Марк", birthdays: moment([1995, 1, 8]) };
    let dima = { name: "Попов Дмитрий", birthdays: moment([1986, 1, 4]) };
    let alisa = { name: "Калмыкова Алиса", birthdays: moment([1998, 1, 25]) };
    let veronika = { name: "Лобанова Вероника", birthdays: moment([1977, 1, 6]) };

    let arrayOfEmployees = [vera, vika, malika, anna, maks, artem, lila, mark, dima, alisa, veronika];
    displayOfTheMonthInText(arrayOfEmployees, 0);
    numberOfYearse(arrayOfEmployees, 0);
    return arrayOfEmployees;
}

function numberOfYearse(arrayOfEmployees, n) {
    let numOfYearse = currentYear - arrayOfEmployees[n].birthdays.year();
    return moment().month() <= arrayOfEmployees[n].birthdays.month() ? numOfYearse : ++numOfYearse;
}

function displayOfTheMonthInText(arrayOfEmployees, n) {
    let monthInText = arrayOfEmployees[n].birthdays.locale('ru').format('MMMM');
    return monthInText[0].toUpperCase() + monthInText.slice(1);
}
function displayOfTheMonthInText(i) {
    let month = moment().add(i, 'month').locale('ru').format('MMMM');
    let monthInText = month[0].toUpperCase() + month.slice(1);
    return monthInText;
}
function displayOfTheYear(i) {
    return currentMonth + i <= 11 ? currentYear : currentYear + 1;
}

function sortByMonth(ii) {
    if(ii == 11)
    let arrayOfEmployees = addingEmployeesToTheArray();
    const sortedArray = arrayOfEmployees.sort((a, b) => { return moment(a.birthdays.month()).diff(b.birthdays.month()) });
    let oneMonthArray = [];
    let count = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i].birthdays.month() == currentMonth + ii) {
            oneMonthArray[count] = sortedArray[i];
            count++;
        }
    }
    return oneMonthArray;
}
function consoleOutput() {
    for (let i = 0; i <= monthInAdvance; i++) {
        let oneMonthArray = sortByMonth(i);
        let text = `${displayOfTheMonthInText(i)} ${displayOfTheYear(i)}`;
        console.log(text);
        for (let index = oneMonthArray.length -1; index >= 0 ; index--) {
            let text_2 = `(${oneMonthArray[index].birthdays.date()}) - ${oneMonthArray[index].name} (${numberOfYearse(oneMonthArray, index)})`; //(${numberOfYearse(sortByMonth(), 0)})`;
            console.log(text_2);
        }
            
        
    }
}
consoleOutput();
addingEmployeesToTheArray();

//export { numberOfYearse as funcNumberOfYearse, displayOfTheMonthInText as funcDisplayOfTheMonthInText};
