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

}
var newUser1 = new UserAcct('ishida', 20, 'img/cake.jpg')
console.log(newUser1);
var storeData1 = JSON.stringify(newUser1);
localStorage.setItem('userObj',storeData1);

var newCard1 = new CardsObj('');
