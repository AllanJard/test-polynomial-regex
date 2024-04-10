
let input = document.body;

function test1 (str) {
	let result = input.replace(/<[^>]*>/g, '');
	
	console.log(result);
	return result;
}

function test2 (str) {
	let result = input.replace(/(<[^>]*>)/g, '');
	
	console.log(result);
	return result;
}

function test3 (str) {
	let result = input.replace(/<([^>]*>)/g, '');
	
	console.log(result);
	return result;
}

function test4 (str) {
	let result = input.replace(/(<([^>]*>))/g, '');
	
	console.log(result);
	return result;
}

var dtStripHtml = function (input) {
	var previous;

	input = input.replace(/<[^>]*>/g, ''); // Complete tags

	// Safety for incomplete script tag - use do / while to ensure that
	// we get all instances
	do {
		previous = input;
		input = input.replace(/<script/i, '');
	} while (input !== previous);

	return previous;
};

test1(input);
test2(input);
test3(input);
test4(input);

console.log( dtStripHtml(input) );

export default dtStripHtml;
export {
	test1,
	test2,
	test3,
	test4
};
