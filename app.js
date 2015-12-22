var cards = [];
console.log(cards);
var imgElBack;

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
var newCard2 = new CardsObj('birthdaySnpy','img/birthday.jpeg','img/pattern2.jpeg',1);
console.log(newCard1);
console.log(newCard2);

function frontCardDisplay() {
  var card1 = document.getElementById('card1');
  var imgEl = document.createElement('img');
  imgEl.setAttribute('id','angry');
  imgEl.setAttribute('src',newCard1.frontCardImg);
  imgEl.setAttribute('alt','Angry Snoopy Image');
  card1.appendChild(imgEl);
}

function backCardDisplay() {
  var cardBack1 = document.getElementById('card1');
  imgElBack = document.createElement('img');
  imgElBack.setAttribute('src',newCard1.backCardImg);
  imgElBack.setAttribute('alt','Back of a card image');
  card1.appendChild(imgElBack);
} backCardDisplay();

imgElBack.addEventListener('click',function(event){
  event.preventDefault();
  imgElBack.style.display = "none";
  frontCardDisplay();

});









