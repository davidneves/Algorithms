var pali = "carlotatolrac";

function iterativePali(word) {
	var init = 0;
	var end = pali.length - 1;
	while (init <= end) {
		console.log(word[init] + word[end]);
		init++;
		end--;
		if (word[init] != word[end]) {
			return "It is not a palindrome!";
		}
	}
	return "It is a palindrome!";
}
console.log(iterativePali(pali));
