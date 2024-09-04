"use strict";
// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.
function getPrototypeChain(obj) {
  const prototypeChain = [];
  let currentObj = obj;
  while (currentObj !== null) {
    prototypeChain.push(currentObj);
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return prototypeChain;
}
const salamBro = {};
console.log(salamBro);
console.log(getPrototypeChain(salamBro));

// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Меня зовут ${this.name} и мне ${this.age} лет.`;
  }
}
const person1 = new Person("John", 25);
console.log(person1.introduce());

// Задание 3 (call, apply 20 минут)
// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму.
// Если средств недостаточно, выводится сообщение "Недостаточно
// средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета
class BankAccount {
  accountNumber;
  balance;
  bankName = "Kaspi";
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Вывод: Deposited ${amount} into account 
					  ${this.accountNumber}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance > amount) {
      this.balance -= amount;
      console.log(`Вывод: Deposited ${amount} into account 
						  ${this.accountNumber}. New balance: ${this.balance}`);
    } else {
      console.log(`Недостаточно средств на счете. balance: ${this.balance}`);
    }
  }
  getBalance() {
    console.log(`New balance: ${this.balance}`);
  }
}
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(2000);
account1.getBalance();

// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} издаёт звук`);
  }
}
class Dog extends Animal {
  breed;
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  fetch() {
    console.log(`Собака ${this.name} принесла мяч`);
  }
  speak() {
    console.log(`животное ${this.name} издаёт звук`);
  }
}
const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
