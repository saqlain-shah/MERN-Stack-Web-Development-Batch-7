// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();
