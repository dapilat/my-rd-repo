const userProfile = {
    id: 1,
    name: 'Alice',
    contact: {
        email: 'alice@example.com',
        phone: '+1-555-123-4567',
        address: {
            city: 'Kyiv',
            country: 'Ukraine',
            zipCode: '01001'
        }
    },
    preferences: {
        theme: 'dark',
        notifications: {
            email: true,
            sms: false,
            push: true
        }
    },
    roles: ['admin', 'editor'],
    summary() {
        return `${this.name} (${this.roles.join(', ')}) prefers ${this.preferences.theme} theme.`;
    },
    keysCount() {
        return Object.keys(this).length;
    },
    multiplyValues(a) {
        console.log(`User id summed with ${a}:`, this.id + a);
    }
};

console.log(userProfile);
console.log('userProfile.keys:', Object.keys(userProfile));

console.log('Summary:', userProfile.summary());
console.log('Keys count:', userProfile.keysCount());
userProfile.multiplyValues(5);

console.log(userProfile.optionalParameter?.param);
