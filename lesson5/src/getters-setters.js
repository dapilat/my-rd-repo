export const ticket = {
    id: 'OPS-123',
    title: 'fix login bug',
    jira_status: 'in-progress',
    assignee: 'Roma',
    get summary() {
        return `${this.id}: ${this.title} (${this.jira_status})`;
    },
    set summary(newSummary) {
        const match = /^([^:]+): (.*) \(([^()]*)\)$/.exec(newSummary);
        if (match) {
            this.id = match[1];
            this.title = match[2];
            this.jira_status = match[3];
        }
    }

};
