import {addNumbers} from './functions.js';
import {filterByStatus} from './jira-functions.js';
import {addNumbersExpr} from './functional-expressions.js';
import {filterByStatusArr, getSummariesOfTicketsByStatuses, giveExampleOfLongArrowFunction, getAllTicketsSummaries} from './jira-arrow-function.js';
import {processTickets} from './callbacks.js';
import {ticket} from './getters-setters.js';

console.log('-----------sum of numbers------');
const result1 = addNumbers(5, 5);
console.log('Result 1, just numbers', result1);
const result2 = addNumbers('5', '5');
console.log('Result 2, strings in numbers', result2);
const result3 = addNumbers('5', 5);
console.log('Result3 atring and number', result3);
const result4 = addNumbers('five', 'five');
console.log('Result4 fives in strings', result4);

console.log('--------play with jira---------');
const jiraTickets = [
    { id: 'OPS-123', title: 'fix login bug', jira_status: 'in-progress', assignee: 'Roma' },
    { id: 'OPS-127', title: 'Update user profile', jira_status: 'To Do', assignee: 'Yana' },
    { id: 'OPS-1215', title: 'Implement new feature', jira_status: 'Done', assignee: 'Dasha'}

];
console.log('All tickets:', jiraTickets);
console.log('Done tickets', filterByStatus(jiraTickets, 'Done'));
console.log('To do tickets', filterByStatus(jiraTickets, 'To Do'));
console.log('in-progress tickets', filterByStatus(jiraTickets, 'in-progress'));

console.log('--------functional expressions---------');
const result1Exp = addNumbers(5, 5);
console.log('Result 1, just numbers', result1Exp);
const result2Expr = addNumbersExpr('5', '5');
console.log('Result 2, strings in numbers', result2Expr);
const result3Expr = addNumbersExpr('5', 5);
console.log('Result3 string and number', result3Expr);
const result4Expr = addNumbersExpr('five', 'five');
console.log('Result4 fives in strings', result4Expr);

console.log('--------play with jira and arrow functions-------');
console.log(filterByStatusArr(jiraTickets, 'in-progress'));
console.log(getSummariesOfTicketsByStatuses(jiraTickets, 'To Do'));
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(giveExampleOfLongArrowFunction(array));

console.log('--------callbacks---------------------------------');
processTickets(jiraTickets, getAllTicketsSummaries, () => console.log('No tickets to process'));

console.log('--------play with getters---------------------------------');
console.log('full ticket:', ticket);
console.log('ticket summary:', ticket.summary);
ticket.summary = 'OPS-999: New summary (Done)';
console.log('full ticket after trying to change summary:', ticket);


