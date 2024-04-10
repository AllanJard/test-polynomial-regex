
let input = '<td>mamma</td><td><strong>papa</strong></td>';

function test1 (str) {
	if (str.length > 100) {
		throw new Error('Test 1');
	}

	let result = str.replace(/<[^>]*>/g, '');
	
	console.log(result);
	return result;
}

function test2 (str) {
	if (str.length > 1000) {
		throw new Error('Test 1');
	}

	let result = str.replace(/(<[^>]*>)/g, '');
	
	console.log(result);
	return result;
}

function test3 (str) {
	if (str.length > 10000) {
		throw new Error('Test 1');
	}

	let result = str.replace(/<([^>]*>)/g, '');
	
	console.log(result);
	return result;
}

function test4 (str) {
	if (str.length > Math.pow(2, 28)) {
		throw new Error('Test 1');
	}

	let result = str.replace(/(<([^>]*>))/g, '');
	
	console.log(result);
	return result;
}

var dtStripHtml = function (input) {
	if (! input.length) {
		return input;
	}

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

// export default dtStripHtml;
// export {
// 	test1,
// 	test2,
// 	test3,
// 	test4
// };
