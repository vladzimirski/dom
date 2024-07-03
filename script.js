"use strict"
// стартовая навигация по странице 
const docElement = document.documentElement;
const docHead = document.head;
const docBody = document.body;
console.log(docElement);
console.log(docHead);
console.log(docBody);
// первые и последнии узлы данного объекта 
const firstChildNode = docBody.firstChild;
const lastChildNode = docBody.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);

// код написанный после подключенного файла скрипта не будет читаться 


// получаем коллекцию со всеми детьми объкта боди
const childNodes = docBody.childNodes;
console.log(childNodes);
// проверка на детей отдает булин 
console.log(docBody.hasChildNodes());

// перебор коллекции чайлднодес через фор оф 
for (let cal of childNodes) { 
    console.log(cal);
};



// движение по узлу 

const previousSublingNode = docBody.previousSibling;
const nextSublingNode = docBody.nextSibling;
const parentNode = docBody.parentNode;

console.log(previousSublingNode);
console.log(nextSublingNode);
console.log(parentNode);

// получение элементов без хуйни 

const bodyChildren = docBody.children;

console.log(bodyChildren);
// поиск по имени класса тегу айди и тд выдает коллекцию всех элементов по данному названию
const elemOne = document.querySelectorAll(".list");
const elemTwo = document.querySelectorAll("li");
const elemThree = document.querySelectorAll("jopa");
console.log(elemThree);
console.log(elemTwo);
console.log(elemOne);
//получение сразу объекта из коллекции 
console.log(elemTwo[2]);// получили третий объект списка перебор через фор оф 
for (let item of elemTwo) {
    console.log(item);
};// получили перебор всего списка li

// сразу дает первый подходящий по поиску объект не возвращает коллекцию из всех объектов 
const li = document.querySelector("li");
console.log(li);