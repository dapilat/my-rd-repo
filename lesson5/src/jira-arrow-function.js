export const filterByStatusArr = (tickets, jira_status) => tickets.filter(ticket => ticket.jira_status === jira_status);

export const getSummariesOfTicketsByStatuses = (tickets, jira_status) =>
    filterByStatusArr(tickets, jira_status).map(ticket => ticket.title);

export const giveExampleOfLongArrowFunction = (exampleArray) => {
    const result = exampleArray.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 0) {
            accumulator.even.push(currentValue);
        } else {
            accumulator.odd.push(currentValue);
        }
        return accumulator;
    }, { even: [], odd: [] });
    return result;
};

export const getAllTicketsSummaries = (tickets) => console.log(tickets.map(ticket => ticket.title));


