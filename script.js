"use strict"
// стартовая навигация по странице 
const docElement = document.documentElement;
const docHead = document.head;
const docBody = document.body;
console.log(docElement);
console.log(docHead);
console.log(docBody);


//ИЗМЕНЕНИЕ ФАЙЛОВ ДОМА

// получаем элемент х1
const htmlElem = document.querySelector("h1");
const htmlInner = htmlElem.innerHTML;
console.log(htmlInner);
// изменяем элемент х1 
htmlElem.innerHTML = "Lilya";
// дописываем содержимое элемента
htmlElem.innerHTML = `${htmlInner} <span class = "yellow">lox</span> `;
console.log(htmlElem.innerHTML);

//получаем содержимое объекта и оболочку этого объекта h1
// при изменении содержиого элемента и повторном вызове в консоль мы получим старые данные 
const textElementContent = htmlElem.outerHTML;
console.log(textElementContent);


//.textContent безопасное изменение текста получаем голый текст вставленные хтмл теги превращаются в строку 
const hTwo = document.querySelector('h2');
const hTwoContent = hTwo.textContent;
console.log(hTwoContent);
hTwo.textContent = '<p>ne lalala</p>';
//.data содердимое текстового узла или комментария 
const getPar = document.querySelector('.list');
const getCom = getPar.nextSibling;
console.log(getCom);
console.log(getCom.data);
// изменение текстового узла комментария 
getCom.data = 'Привет';
console.log(getCom.data);
// МЕТОД СОЗДАНИЯ ЭЛЕМЕНТОВ И УЗЛОВ .createElement() тега например див
const newElement = document.createElement('div');
console.log(newElement);
//наполняем новый элемент 
newElement.innerHTML = `Привет, я новый <span>Элемент</span>`;
//создание текстового узла .createTextNode
const crNewText = document.createTextNode('Privet');
console.log(crNewText);
/* СОЗДАННЫЕ ОБЪЕКТЫ НАХОДЯТСЯ В КОНСТАНТАХ
НО НЕ ЯВЛЯЮТСЯ ЧАСТЬЮ ДОКУМЕНТА */


//МЕТОДЫ ВСТАВКИ 
const getElem = document.querySelector('.zalupa');
const doNewElem = document.createElement('div');
doNewElem.innerHTML = 'ya drug zalupi';
// теперь мы вставляем новый элемент перед уже готовыми элементами разными способами

// новый элемент перед старым 
getElem.before(doNewElem);
//после элемента
getElem.after(doNewElem);
//внутрь и в начала объекта тоесть внутрь уже существуещего дива
getElem.prepend(doNewElem);
//внутрь и в конец объекта внутрь дива в конец объекта
getElem.append(doNewElem);





// первые и последнии узлы данного объекта 
// const firstChildNode = docBody.firstChild;
// const lastChildNode = docBody.lastChild;

// console.log(firstChildNode);
// console.log(lastChildNode);

// // код написанный после подключенного файла скрипта не будет читаться 


// // получаем коллекцию со всеми детьми объкта боди
// const childNodes = docBody.childNodes;
// console.log(childNodes);
// // проверка на детей отдает булин 
// console.log(docBody.hasChildNodes());

// // перебор коллекции чайлднодес через фор оф 
// for (let cal of childNodes) { 
//     console.log(cal);
// };



// // движение по узлу 

// const previousSublingNode = docBody.previousSibling;
// const nextSublingNode = docBody.nextSibling;
// const parentNode = docBody.parentNode;

// console.log(previousSublingNode);
// console.log(nextSublingNode);
// console.log(parentNode);

// // получение элементов без хуйни 

// const bodyChildren = docBody.children;

// console.log(bodyChildren);
// // поиск по имени класса тегу айди и тд выдает коллекцию всех элементов по данному названию
// const elemOne = document.querySelectorAll(".list");
// const elemTwo = document.querySelectorAll("li");
// const elemThree = document.querySelectorAll("jopa");
// console.log(elemThree);
// console.log(elemTwo);
// console.log(elemOne);
// //получение сразу объекта из коллекции 
// console.log(elemTwo[2]);// получили третий объект списка перебор через фор оф 
// for (let item of elemTwo) {
//     console.log(item);
// };// получили перебор всего списка li

// // сразу дает первый подходящий по поиску объект не возвращает коллекцию из всех объектов 
// const li = document.querySelector("li");
// console.log(li);