'use strict';

//Global Variables
let allProducts = [];
let clicks = 0;
let clicksAllowed = 25;
let myContainer = document.querySelector('#products');
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
  while (imageHolder.length < 6) {
    let uniqueImage = selectRandomProductIndex();
    if (!imageHolder.includes(uniqueImage)){
      imageHolder.push(uniqueImage);
    }
  }
  let ProductOne = imageHolder.shift();
  let ProductTwo = imageHolder.shift();
  let ProductThree = imageHolder.shift();
  imageOne.src = allProducts[ProductOne].src;
  imageOne.alt = allProducts[ProductOne].name;
  allProducts[ProductOne].views++;

  imageTwo.src = allProducts[ProductTwo].src;
  imageTwo.alt = allProducts[ProductTwo].name;
  allProducts[ProductTwo].views++;

  imageThree.src = allProducts[ProductThree].src;
  imageThree.alt = allProducts[ProductThree].name;
  allProducts[ProductThree].views++;
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
  }
  renderRandomProduct();
  if(clicks === clicksAllowed){
    myContainer.removeEventListener('click', handleProductClick);
    alert('You have clicked 25 times thanks for your input! Click View Results to see results');
  }
}


//Function for allowing the View Results button
function handleButtonClick(event){ //eslint-disable-line
  if (clicks === clicksAllowed){
    renderChart();
  }
}

function renderChart (){
  let clicks = [];
  let views = [];
  let names = [];

  for (let i = 0; i < allProducts.length; i++){
    clicks.push(allProducts[i].clicks);
    views.push(allProducts[i].views);
    names.push(allProducts[i].name);
  }

  let ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Clicks',
        data: clicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: views,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

renderRandomProduct();

//Event Listeners
myContainer.addEventListener('click', handleProductClick);
myButton.addEventListener('click', handleButtonClick);
