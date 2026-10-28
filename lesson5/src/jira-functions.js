export function filterByStatus(tickets, jira_status) {
    return tickets.filter(ticket => ticket.jira_status === jira_status);
}
