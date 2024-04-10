
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

test1(input);
test2(input);
test3(input);
test4(input);
