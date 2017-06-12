/**************************************************************************************
# 7
Scope
Fix scope to make the assertion pass.
The global variable should be 'prius'.
**************************************************************************************/
( function() {
  "use strict";

  var car = 'prius';

  function changeCar() {
    const car = 'beattle';
  }
  changeCar();


  console.log( "global variable: ", car );
  console.assert( car == "prius", "#7: Test failed. Fix scope." )
} )();


/**************************************************************************************
# 8
Compartmentalization
Fix compartmentalization so that the assertions pass. Something needs to be done to styling() to isolate it from the global scope...
**************************************************************************************/
( function() {
  "use strict";
  const language = 'HTML';

(function styling() {
  const language = 'CSS'
  console.log(language);
  console.assert(language == "CSS", "Test Failed. Did you compartmentalize?");
})();

console.log(language);
console.assert(language == "HTML", "Test Failed. Did you compartmentalize?");
} )();



/**************************************************************************************
# 9
Hoisting
Fix hoisting so that the assertions pass.
Where should the 'sum' asserting go?
Where should 'multiply()' go?
**************************************************************************************/

( function() {
  "use strinct";

  function hoistThis() {
    function multiply( sum ) {
      console.assert( sum * 2 == "8", "#9: Test failed. Check your function hoisting" );
      return sum * 2;
    }
    var sum;
    sum = 2 + 2;
    multiply( sum );
    console.assert( sum == "4", "#9: Test failed. Check hoisting" );

  }
  hoistThis();
} )();


/**************************************************************************************
OBJECTS
COMPLETE THE FOLLOWING FUNCTIONS TO MAKE THE ASSERTIONS PASS
**************************************************************************************
# 10
Dot notation
Edit the following object using dot notation to 'add' the missing computer component, an 'nvidia' GPU.
**************************************************************************************/

( function() {
  "use strict";
  const computer = {
    motherboard: "full",
    processor: "i-7",
    memory: "4GB",
    GPU: "nvidia"
  };
 //Add missing property here.
  console.log( "#10: computer", computer )
  console.assert( computer.GPU == "nvidia", "Test failed. The computer should have an 'nvidia' GPU" )
} )();


/**************************************************************************************
# 11
Bracket notation
The following object is empty. Use bracket notation so that 'car' has two doors, four wheels, an engine (use a boolean), the type is 'sport', the engine-size is a v-8 and the model is a mustang.
**************************************************************************************/

( function() {
  "use strict";
  var car = {};

  car["doors"] = 2;
  car["wheels"] = 4;
  car["engine"] = true;
  car["type"] = "sport";
  car["engine-size"] = "v-8";
  car["model"] = "mustang";


//Add properties here.

  console.log( "#11: ", car )
  console.assert( car[ "doors" ] == 2, "#11: Test failed. See required properties" )
  console.assert( car[ "wheels" ] == 4, "#11: Test failed. See required properties" )
  console.assert( car[ "engine" ] == true, "#11: Test failed. See required properties" )
  console.assert( car[ "type" ] == "sport", "#11: Test failed. See required properties" )
  console.assert( car[ "engine-size" ] == "v-8", "#11: Test failed. See required properties" )
  console.assert( car[ "model" ] == "mustang", "#11: Test failed. See required properties" )
} )();
