
let input = '<td>mamma</td><td><strong>papa</strong></td>';

console.log(input.replace(/<[^>]*>/g, ''));

console.log(input.replace(/(<[^>]*>)/g, ''));
