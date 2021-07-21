function addingEmployeesToTheArray() {
    let vera = { name: "Бондарева Вера", age: 18, birthdays: Date('5 24') };
    let vika = { name: "Васильева Виктория", age: 22, birthdays: Date('2 13') };
    let malika = { name: "Кузнецова Малика", age: 34, birthdays: Date('7 16') };
    let anna = { name: "Петрова Анна", age: 19, birthdays: Date('7 28') };
    let maks = { name: "Белов Максим", age: 48, birthdays: Date('5 3') };
    let artem = { name: "Федосеев Артём", age: 28, birthdays: Date('2 1') };
    let lila = { name: "Овчинникова Лиля", age: 37, birthdays: Date('5 13') };
    let mark = { name: "Емельянов Марк", age: 55, birthdays: Date('12 27') };
    let dima = { name: "Попов Дмитрий", age: 46, birthdays: Date('1 18') };
    let alisa = { name: "Калмыкова Алиса", age: 29, birthdays: Date('11 6') };
    let veronika = { name: "Лобанова Вероника ", age: 82, birthdays: Date('12 6') };
    
    let arrayOfEmployees = [vera, vika, malika, anna, maks, artem, lila, mark, dima, alisa, veronika];
    console.log(arrayOfEmployees[1].birthdays.getMonth());
    return arrayOfEmployees;
}
function sortByMonth() {
    let arrayOfEmployees = addingEmployeesToTheArray();
    let arr = [];
    arr = arrayOfEmployees.sort((a, b) => a.birthdays.getMonth() > b.birthdays.getMonth() ? 1 : -1);
    return arr;
}
addingEmployeesToTheArray();
