'use strict';

//Global Variables
let allProducts = [];
let clicks = 0;
let clicksAllowed = 15;
let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');

//Object Constructor for the Products
function Product(name, fileExtension ='jpg'){
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

//Instances of the Products Object Constructor
new Product('bad');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthlhu');
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

imageOne.src ='/img/bad.jpg';
