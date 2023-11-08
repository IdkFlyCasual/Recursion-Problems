/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
console.log(iceCreamShop([], 'honey lavender')); // false
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
***********************************************************************/


function iceCreamShop(flavors, favorite){
  
  if(flavors[0] === favorite){
    return true

  }else{
    flavors.shift()

  }

  if(flavors.length > 0){
    iceCreamShop(flavors, favorite)

  }else{
    return false

  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
