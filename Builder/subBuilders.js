class Person {
    constructor() {
        this.streetAddress = '';
        this.postcode = '';
        this.city = '';
        this.companyName = '';
        this.position = '';
        this.annualIncome = 0;
    }
}

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person;
    }

    adressBuilder() {
        return new PersonAddressBuilder(this.person);
    }

    jobBuilder() {
        return new PersonJobBuilder(this.person);
    }

    build() {
        return this.person;
    }
}

class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    withStreet(streetAddress) {
        this.person.streetAddress = streetAddress;
        return this;
    }

    withCity(city) {
        this.person.city = city;
        return this;
    }

    withPostcode(postcode) {
        this.person.postcode = postcode;
        return this;
    }
}

class PersonJobBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    withCompany(companyName) {
        this.person.companyName = companyName;
        return this;
    }

    withPosition(position) {
        this.person.position = position;
        return this;
    }

    withIncome(annualIncome) {
        this.person.annualIncome = annualIncome;
        return this;
    }
}

const person = new PersonBuilder()
    .adressBuilder().withStreet('123 London Road').withCity('London').withPostcode('SW12BC')
    .jobBuilder().withCompany('Fabrikam').withPosition('Engineer').withIncome(123000)
    .build();
console.log(person);
