import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test suite: formatCurrency')
console.log('Test cases:');
console.log('2095 -> 20.95')
if(formatCurrency(2095) === '20.95') {
    console.log('\tpassed');
} else {
    console.log('\tfailed');
}
console.log('Case 0 -> 0.00');
if(formatCurrency(0) === '0.00'){
    console.log('\tpassed');
} else {
    console.log('\tfailed');
}
console.log('Case 2000.5 -> 20.01');
if(formatCurrency(2000.5) === '20.01'){
    console.log('\tpassed');
} else {
    console.log('\tfailed');
}
console.log('Case 2000.4 -> 20.00');
if(formatCurrency(2000.4) === '20.00'){
    console.log('\tpassed');
} else {
    console.log('\tfailed');
}
console.log('Test end');
