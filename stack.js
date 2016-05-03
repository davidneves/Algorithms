var counter = 0;
var stack = [];

function push (item) {
	stack[counter] = item;
	counter++;
	return stack.slice(0, counter);
}

function pop() {
	counter--;
	return stack[counter];
}
