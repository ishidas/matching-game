//create a constructor for User Acct
var UserAcct = function(userID,age,logoLink) {
this.userID = userID;
this.age = age;
this.logoLink = logoLink;
this.score = 0;

// - ID
// - Age
// - Icon
// - score
}

//Create a constructor for Cards
// - Name
// - Path/Link of Img
// - front
// - back
// - card index num
var newUser1 = new UserAcct('ishida', 20, 'img/cake.jpg')
console.log(newUser1);
var storeData1 = JSON.stringify(newUser1);
localStorage.setItem('userObj',storeData1);
