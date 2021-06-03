'use strict';

//Global Variables
let allProducts = [];
let clicks = 0;
let clicksAllowed = 25;
let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let imageHolder = [];


//Object Constructor for the Products
function Product(name, fileExtension ='jpg'){
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

//Instances of the Products Object Constructor
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

// Selects a Random Product
function selectRandomProductIndex(){
  return Math.floor(Math.random() * allProducts.length);
}

//Function to put three products on the screen
function renderRandomProduct(){
  let ProductOne = selectRandomProductIndex();
  let ProductTwo = selectRandomProductIndex();
  let ProductThree = selectRandomProductIndex();
  while (imageHolder.length < 3) {
    if(!imageHolder.includes(selectRandomProductIndex)){
      imageHolder.push(selectRandomProductIndex);
    }
  }
  if (ProductOne === ProductTwo || ProductOne === ProductThree || ProductTwo === ProductThree){
    return renderRandomProduct();
  }

  imageOne.src = allProducts[ProductOne].src;
  imageOne.alt = allProducts[ProductOne].name;
  allProducts[ProductOne].views++;

  imageTwo.src = allProducts[ProductTwo].src;
  imageTwo.alt = allProducts[ProductTwo].name;
  allProducts[ProductTwo].views++;

  imageThree.src = allProducts[ProductThree].src;
  imageThree.alt = allProducts[ProductThree].name;
  allProducts[ProductThree].views++;

  // console.log(`
  // Product One: ${ProductOne}
  // Product Two: ${ProductTwo}
  // Product Three: ${ProductThree}`);
}

//Function that will increments clicks and handles the img Click
function handleProductClick(event){
  if(event.target === myContainer){
    alert('click on an IMAGE please!');
  }

  clicks++;
  let clickProduct = event.target.alt;
  for (let i = 0; i < allProducts.length; i++){
    if (clickProduct === allProducts[i].name){
      allProducts[i].clicks++;
    }
    renderRandomProduct();
    if(clicks === clicksAllowed){
      myContainer.removeEventListener('click', handleProductClick);
      alert('You have clicked 25 times thanks for your input! Click View Results to see results');
      return;
    }
  }
}

//Function to render my results to the page
function renderResults(){
  let ul = document.querySelector('ul');
  for (let i = 0; i < allProducts.length; i++){
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} times`;
    ul.appendChild(li);
  }
}

//Function for allowing the View Results button
function handleButtonClick(event){ //eslint-disable-line
  if (clicks === clicksAllowed){
    renderResults();
  }
}

renderRandomProduct();

//Event Listeners
myContainer.addEventListener('click', handleProductClick);
myButton.addEventListener('click', handleButtonClick);
