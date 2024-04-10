
let input = argv[1];
var _re_html = /<[^>]*>/g;

console.log(input.replace(/<[^>]*>/g, ''));

console.log(input.replace(/(<[^>]*>)/g, ''));
