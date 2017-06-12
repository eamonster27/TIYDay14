/**************************************************************************************
FIX THE FOLLOWING FUNCTIONS AND MAKE THE ASSERTIONS PASS
Read the instructions and assertions carefully.
HINT: sometimes the aswers is in the question...
**************************************************************************************
DATE OBJECTES
**************************************************************************************
# 1
Date Objects
- Fix the following function and make the assertion pass.
- Has the date been set properly?
**************************************************************************************/
( function() {
  "use strict";

   var date = new Date( "Aug 28, 2008 23:30:00" );
   date.setDate(24);

   console.log("#1: setDate: ", date)
   console.assert(date == "Sun Aug 24 2008 23:30:00 GMT-0500 (CDT)", "#1: Test failed. It returned: " + date)
} )();

/**************************************************************************************
# 2
Date Objects
- Fix the following function and make the assertion pass.
- Why isn't it returning year as a four digit number?
**************************************************************************************/
( function() {
  "use strict";

  var date = new Date();
  date.getFullYear();
  console.assert(currentYear == "2017", "#2: Test failed. It returned: " + currentYear)
} )();

/**************************************************************************************
# 3
Date Objects
- Fix the following function and make the assertion pass.
- Are the 'setters' set correctly?
**************************************************************************************/
(function() {
  "use strict";

  var date = new Date();
  date.setHours();
  date.setMinutes();
  console.log("#3: date: ", date)

  function seeYa() {
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var time = hour + ":" + minutes;
    return "See you at " + time;
  }
  seeYa();
  console.log("#3: time: ", seeYa())
  console.assert(seeYa() == "See you at 7:30", "#3: Test failed. It returned: " + seeYa());
})();

/**************************************************************************************
# 4
Objects
- Fix the object and make the assertion pass.
- Use bracket notation to make the assertions pass.
**************************************************************************************/
(function() {
  "use strict";

  var house = {
    brick: false,
    windows: 10,
    doors: 3,
    doubleGarage: true,
  }

  //Your code here.

  console.log("#4 house: ", house);
  console.assert(house["fireplace"] == true, "#4: Test failed. There should be a fireplace.");
  console.assert(house["HVAC"] == true, "#4: Test failed. There should be HVAC.");
})();

/**************************************************************************************
# 5
Objects
- The assertion should give you a nice hint. Are the properties being set right?
- The property 'dogLover' should print, 'Dan loves dogs'
**************************************************************************************/
const likesFish = 'Mark';

function likesDogs(name) {
  if (name === 'Dan') {
    return 'Dan loves dogs';
  } else {
    return "Hey" + " " + name + "." + " " + "Do you like dogs?";
  }
}

const pet = {
  catLover: 'Jane',
  dogLover: 'Pedro',
  fishLover: likesFish,
};

console.log("#5 catLover: ", pet.catLover);
console.log("#5 dogLover: ", pet.dogLover);
console.log("#5 fishLover: ", pet.fishLover);
console.assert(pet.dogLover == "Dan loves dogs", "#5: Test failed. Dan should be the only one who loves dogs!. It returned: " + pet.dogLover);

/**************************************************************************************
# 6
Math Objects
- Fix 'maximus()'. It should return the 'largest' interger from 'numbers'.
**************************************************************************************/
(function() {
  "use strict";
  var numbers = [234, 932, 1, 22, 2018];

  function maximus() {
    return Math.pow(...numbers)
  };
  maximus();
  console.log("#6: maximus(): ", maximus())
  console.assert(maximus() == "2018", "#6: Test failed. Are you doing your math correctly?");
})();

/************************************************
# 7
Hoisting
- Keeping hoisting in mind, move the assert to right position so that it passes.
**************************************************************************************/
(function() {
  "use strict";

  var how = "how";
  console.assert(question == "how are you?", "#7: Test failed. Check hoisting.")
  var are = "are";
  var you = "you?"
  var question = how + " " + are + " " + you;
})();

/************************************************
#8
Hoisting
- Keeping hoisting in mind, something needs to change. Does the function expression look right? How does hoisting affect function expressions? How would the interpreter process this example?
**************************************************************************************/

(function() {
  "use strict;"
  var name;

  greeting();

  var greeting = function() {
    return "Hello " + name;
  };
  console.log("#8: greeting: ", greeting())
  console.assert(greeting() == "Hello Peter", "#8: Test failed. Check variables and function hoisting")
})();

/************************************************
# 9
Hoisting
- Keeping hoisting and scope in mind, fix the following function so that the assertion passes.
**************************************************************************************/
(function() {
  "use strict";
  var name = "Mary";
  console.assert(principal == "Joel", "#9: Test failed. Check hoisting. Is this where it is supposed to be?")
  var teacher = "The teacher";
  var principal = "Joel";

  explain();

  var explain = function () {
    function math() {
      return 2 + 2;
    }
    return teacher + " " + "expalins to" + " " + name + " " + "that two plus two equals" + " " + math();
  }
  console.log(explain());
  console.assert(explain() == "The teacher expalins to Mary that two plus two equals 4", "#9: Test failed. Check scope and hoisting")
})();


/************************************************
# 10
Scope and Hoisting
- Keeping hoisting and scope in mind, fix the following function so that the assertion passes.
**************************************************************************************/

(function() {
  "use strict";

  function divide() {
    console.assert(division == "4", "#10 : Test failed. This assertion is in the wrong spot!");

    function stringIt() {

      return "8 divided by 2 is equal to " + division;
    }
    stringIt();
    console.assert(stringIt() == "4", "#10 : Test failed. Make sure to return stringIt()");
    var division = 8 / 2;

  }
  divide();
  console.log("#10 divide(): ", divide());
  console.assert(divide() == "8 divided by 2 is equal to 4", "#10: Test failed. Check scope and hoisting in divide(). Is 'division' in the right place? Is stringIt() in the right place?");
})();

/**************************************************************************************
# 11
Scope and Hoisting
- Fix 'cappucinoLover()' so that the assertions pass.
- Pay attention to scope. 'sugar()' must go in a very specific place in order for this to work.
- Thiking about function, are functions being called when they are supposed to?
- It should return: 'Make me a cappucino with: French roast beans, regular milk, lots of froth and  raw sugar.'
HINT: It seems that it is very important for this coffee fanatic to know whether or not you want sugar with your coffee, even before the coffee is made...
**************************************************************************************/
(function() {
  "use strict";

  var trueLover = false;
  var addSugar;

  cappucinoLover(trueLover);
  var cappucinoLover = function(trueLover) {
    cappucino = {};
    if (trueLover == true) {
      cappucino["coffee"] = "French roast beans";
      cappucino["milk"] = "regular milk";
      cappucino["froth"] = "lots of froth";

      return "Make me a cappucino with: " + cappucino["coffee"] + " , " + cappucino["milk"] + " , " + cappucino["froth"] + " and  " + cappucino["sugar"];
    } else {
      return "You are not a true coffee lover!"
    }

    function sugar(addSugar) {
      if (addSugar == true) {
        cappucino["sugar"] = "raw sugar";
      } else {
        cappucino["sugar"] = "no sugar please";
      }
    }
    sugar(addSugar);
  }

  console.log("#11 cappucinoLover: ", cappucinoLover(trueLover));
  console.assert(cappucinoLover(trueLover) == 'Make me a cappucino with: French roast beans, regular milk, lots of froth and  raw sugar', "#11: Test failed. You should be a cappucino lover! It returned: " + cappucinoLover(trueLover) + ". Check the variables. Is sugar() in the right scope? What about hoisting? Are functions being called when they are supposed to?")
})();

/**************************************************************************************
# 12
- Fix all scope and hoisting issues in order to make all assertions pass.
**************************************************************************************/

(function() {
  "use strict";

  var sierra = "it's awesome!";
  var android = "they love it!";
  var windows = "he would not change it for anything!";
  var expertReviews = {};

  var os = ["Sierra", "Android", "Windows 10"];

  reviewsCompiler();
  var reviewsCompiler = function() {
    os = ["Apple", "Acer", "HP"];
    var i;
    for (i = 0; i < os.length; i++) {
      review;
      if (os[i] == "Sierra") {
        review = "Developers think " + sierra;
        expertReviews[os[i]] = review;
      } else if (os[i] == "Android") {
        review = "Modders say that " + android;
        expertReviews[os[i]] = review;
      } else if (os[i] == "Windows 10") {
        review = "Awesome Joel says " + windows;
        expertReviews[os[i]] = review;
      }
      return expertReviews;
    }
  }

  console.log("#12: ", reviewsCompiler());
  console.assert(JSON.stringify(reviewsCompiler()) == '{"Sierra":"Developers think it\'s awesome!","Android":"Modders say that they love it!","Windows 10":"Awesome Joel says he would not change it for anything!"}', '#12: Test failed. Check function\'s scope and hoisting')
})();
