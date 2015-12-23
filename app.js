var cards = [];
console.log(cards);
var imgElBack;
var cardContEl;
var cardBacks;
//create a constructor for User Acct
var UserAcct = function(userID,age,logoLink) {
this.userID = userID;
this.age = age;
this.logoLink = logoLink;
this.score = 0;

}

//Create a constructor for Cards
var CardsObj = function(cardName, frontCardImg,backCardImg, cardIndex){
this.cardName = cardName;
this.frontCardImg = frontCardImg;
this.backCardImg = backCardImg;
this.cardIndex = cardIndex;
cards.push(this);
}


//new user acct object
var newUser1 = new UserAcct('ishida', 20, 'img/cake.jpg')
console.log(newUser1);
var storeData1 = JSON.stringify(newUser1);
localStorage.setItem('userObj',storeData1);

//new card object
var newCard1 = new CardsObj('angrySnpy','img/angry.jpeg','img/pattern2.jpeg',1);
var newCard2 = new CardsObj('birthdaySnpy','img/birthday.jpeg','img/pattern2.jpeg',2);
var newCard3 = new CardsObj('cool','img/cool.jpeg','img/pattern2.jpeg',3);
var newCard4 = new CardsObj('flower','img/flower.jpeg','img/pattern2.jpeg',4);
console.log(newCard1);
console.log(newCard2);


function backCardDisplay () {
  cardBacks = document.getElementsByClassName('cards');
  for(var i = 0; i < cardBacks.length; i++ ){
  imgElBack = document.createElement('img');
  imgElBack.setAttribute('src','img/pattern2.jpeg');
  imgElBack.setAttribute('alt','Back of a card image');
  cardBacks[i].appendChild(imgElBack);
  }
}

function frontCardDisplay () {
  // cardContEl = document.getElementsByClassName('frontcards');
  cardBacks = document.getElementsByClassName('cards');
  for(var i = 0; i < cardBacks.length; i++ ){
  // cardContEl[i].src = cards[i].frontCardImg;
  var imgEl = document.createElement('img');
  imgEl.src = cards[i].frontCardImg;
  cardBacks[i].appendChild(imgEl);
  }
}

backCardDisplay();





var imgPattern = document.getElementById('cardList');
imgPattern.addEventListener('click',function(event){
  event.preventDefault();
  if(event.target && event.target.nodeName === 'img'){
    var imgEl = event.target.nodeName('img');
    console.log(imgEl);
  }


  frontCardDisplay();

});








