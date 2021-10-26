class Person {
  public streetAddress: string;
  public postcode: string;
  public city: string;
  public companyName: string;
  public position: string;
  public annualIncome: number;

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
  protected person: Person;

  constructor(person = new Person()) {
    this.person = person;
  }

  public adressBuilder(): PersonAddressBuilder {
    return new PersonAddressBuilder(this.person);
  }

  public jobBuilder(): PersonJobBuilder {
    return new PersonJobBuilder(this.person);
  }

  public build(): Person {
    return this.person;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }

  public withStreet(streetAddress: string): PersonAddressBuilder {
    this.person.streetAddress = streetAddress;
    return this;
  }

  public withCity(city: string): PersonAddressBuilder {
    this.person.city = city;
    return this;
  }

  public withPostcode(postcode: string): PersonAddressBuilder {
    this.person.postcode = postcode;
    return this;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }

  public withCompany(companyName: string): PersonJobBuilder {
    this.person.companyName = companyName;
    return this;
  }

  public withPosition(position: string): PersonJobBuilder {
    this.person.position = position;
    return this;
  }

  public withIncome(annualIncome: number): PersonJobBuilder {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

export default PersonBuilder;
