
let input = '<td>mamma</td><td><strong>papa</strong></td>';
var _re_html = /<[^>]*>/g;

console.log(input.replace(_re_html, ''));

console.log(input.replace(/(<[^>]*>)/g, ''));
