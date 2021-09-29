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

    setStreet(streetAddress) {
        this.person.streetAddress = streetAddress;
        return this;
    }

    setCity(city) {
        this.person.city = city;
        return this;
    }

    setPostcode(postcode) {
        this.person.postcode = postcode;
        return this;
    }
}

class PersonJobBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    setCompany(companyName) {
        this.person.companyName = companyName;
        return this;
    }

    setPosition(position) {
        this.person.position = position;
        return this;
    }

    setIncome(annualIncome) {
        this.person.annualIncome = annualIncome;
        return this;
    }
}

const person = new PersonBuilder()
    .adressBuilder().setStreet('123 London Road').setCity('London').setPostcode('SW12BC')
    .jobBuilder().setCompany('Fabrikam').setPosition('Engineer').setIncome(123000)
    .build();
console.log(person);
