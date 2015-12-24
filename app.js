var cards = [];
var cardsShuffle = [];
console.log(cards);
//back of the cards
var cardBacks;
var imgElBack;

var cardContEl;

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

CardsObj.prototype.backCardDisplay = function () {
  cardBacks = document.getElementById('cardList');
  imgElBack = document.createElement('img');
  imgElBack.setAttribute('src',this.backCardImg);
  imgElBack.setAttribute('alt','Back of a card image');
  cardBacks.appendChild(imgElBack);
};

//new user acct object
var newUser1 = new UserAcct('ishida', 20, 'img/cake.jpg')
console.log(newUser1);
var storeData1 = JSON.stringify(newUser1);
localStorage.setItem('userObj',storeData1);

//new card object
var newCard1 = new CardsObj('angrySnpy','img/angry.jpeg','img/pattern1.jpeg',1);
var newCard2 = new CardsObj('birthdaySnpy','img/birthday.jpeg','img/pattern2.jpeg',2);
var newCard3 = new CardsObj('cool','img/cool.jpeg','img/pattern3.jpeg',3);
var newCard4 = new CardsObj('flower','img/flower.jpeg','img/pattern4.jpeg',4);


//creating back of the card

newCard1.backCardDisplay();
newCard2.backCardDisplay();
newCard3.backCardDisplay();
newCard4.backCardDisplay();



//Event listener
var imgPattern = document.getElementById('cardList');

imgPattern.addEventListener('click',function(event){
  event.preventDefault();
  var attributeGet = event.target.getAttribute('src');
  console.log(attributeGet);
  if(attributeGet === newCard1.backCardImg){
  event.target.setAttribute('src',newCard1.frontCardImg);
  } else if(attributeGet === newCard2.backCardImg){
  event.target.setAttribute('src',newCard2.frontCardImg);
  } else if(attributeGet === newCard3.backCardImg){
  event.target.setAttribute('src',newCard3.frontCardImg);
  }else if(attributeGet === newCard4.backCardImg){
  event.target.setAttribute('src',newCard4.frontCardImg);
  }
});








