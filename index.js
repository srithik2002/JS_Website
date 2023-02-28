// const myDIV = document.createElement("div");
// document.body.appendChild(myDIV);
// myDIV.id = "myDIV";
// const para = document.createElement("p");
// para.innerHTML = "This is a paragraph.";
// document.getElementById("myDIV").appendChild(para);


//body
//navbar
var nav1 = document.createElement("nav");
nav1.className = "navbar navbar-expand-md navbar-dark fixed-top bg-dark py-3 px-3";
nav1.id = "nav1";
document.body.appendChild(nav1);
const myImage = new Image(40, 32); //width , height
myImage.src = 'apple.png';
document.body.appendChild(myImage);
nav1.appendChild(myImage);
//navbar-end

//main-body
var mb1 = document.createElement("div");
mb1.className = "position-relative p-3 p-md-5 m-md-3 text-center bg-light";
mb1.id = "mb1";
document.body.appendChild(mb1);
var b1 = document.createElement("div");
b1.className = "col-md-5 p-lg-5 mx-auto my-5";
mb1.appendChild(b1);
b1.id = "b1";
var bh1 = document.createElement("h1");
bh1.className = "display-5 font-weight-normal py-2";
bh1.innerHTML = "Apple Marketplace";
b1.appendChild(bh1);
var bp1 = document.createElement("p");
bp1.className = "lead font-weight-normal py-3";
bp1.innerHTML = "Get the best new apple products and refurbished products.100% Genuine"
b1.appendChild(bp1);
var bb1 = document.createElement("a");
bb1.className = "btn btn-outline-secondary";
bb1.innerHTML = "Shop Now";
bb1.href = "#";
b1.appendChild(bb1);
//main-body-complete

//structure

var sd1 = document.createElement("div");
sd1.className = "container-fluid mt-4 d-flex mb-5 text-center";
sd1.id = "sd1";
document.body.appendChild(sd1);
var rowMaj = document.createElement("div");
rowMaj.className = "row";
sd1.appendChild(rowMaj);
rowMaj.id = "rowMaj";
var col1 = document.createElement("div");
col1.className = "col-md-6 mt-3";
rowMaj.appendChild(col1);
col1.id = "col1";
var card1 = document.createElement("div");
card1.className = "card";
col1.appendChild(card1);
card1.id = "card1";
const myImage2 = new Image(); //width , height
myImage2.src = 'mpad.jpg';
myImage2.className = "card-img-top w-100"
card1.appendChild(myImage2);
var cardb = document.createElement("div");
cardb.className = "card-body";
card1.appendChild(cardb);
cardb.id = "cardb";
var cardt = document.createElement("h2");
cardt.className = "card-title";
cardt.innerHTML = "Ipad Pro";
cardb.appendChild(cardt);


var col2 = document.createElement("div");
col2.className = "col-md-6 mt-3";
rowMaj.appendChild(col2);
col2.id = "col2";
var card2 = document.createElement("div");
card2.className = "card";
col2.appendChild(card2);
card2.id = "card2";
const myImage3 = new Image(); //width , height
myImage3.src = 'mbpro.jpg';
myImage3.className = "card-img-top w-100"
card2.appendChild(myImage3);
var cardb2 = document.createElement("div");
cardb2.className = "card-body";
card2.appendChild(cardb2);
cardb2.id = "cardb2";
var cardt2 = document.createElement("h2");
cardt2.className = "card-title";
cardt2.innerHTML = "Macbook Pro";
cardb2.appendChild(cardt2);


var col3 = document.createElement("div");
col3.className = "col-md-6 mt-3";
rowMaj.appendChild(col3);
col3.id = "col3";
var card3 = document.createElement("div");
card3.className = "card";
col3.appendChild(card3);
card3.id = "card2";
const myImage4 = new Image(); //width , height
myImage4.src = 'mbpro.jpg';
myImage4.className = "card-img-top w-100"
card3.appendChild(myImage4);
var cardb3 = document.createElement("div");
cardb3.className = "card-body";
card3.appendChild(cardb3);
cardb3.id = "cardb3";
var cardt3 = document.createElement("h2");
cardt3.className = "card-title";
cardt3.innerHTML = "Macbook Pro";
cardb3.appendChild(cardt3);


var col4 = document.createElement("div");
col4.className = "col-md-6 mt-3";
rowMaj.appendChild(col4);
col4.id = "col4";
var card4 = document.createElement("div");
card4.className = "card";
col4.appendChild(card4);
card4.id = "card4";
const myImage5 = new Image(); //width , height
myImage5.src = 'mpad.jpg';
myImage5.className = "card-img-top w-100"
card4.appendChild(myImage5);
var cardb4 = document.createElement("div");
cardb4.className = "card-body";
card4.appendChild(cardb4);
cardb4.id = "cardb4";
var cardt4 = document.createElement("h2");
cardt4.className = "card-title";
cardt4.innerHTML = "Ipad Pro";
cardb4.appendChild(cardt4);

//main-body-end