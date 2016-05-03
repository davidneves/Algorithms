var pali = "carlotatolrac";

var init = 0;
var end = pali.length - 1;

function recursivePali(word) {
  if (word[init] === word[end] && init < end) {
    init++;
    end--;
    return recursivePali(word);
  }
  if (word[init] != word[end]) {
    return "It is not a palindrome!";
  }
  return "It is a palindrome!";
}
console.log(recursivePali(pali));
