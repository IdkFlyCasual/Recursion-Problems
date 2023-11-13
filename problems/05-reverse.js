/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
console.log(reverse("house")); // "esuoh")
***********************************************************************/

function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
