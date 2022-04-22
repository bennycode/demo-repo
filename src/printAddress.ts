export function printAddress(person: Person): void {
  if (!person.address) {
    throw new MissingAddressError();
  }

  console.log(person.address.city);
}

export class MissingAddressError extends Error {
  constructor() {
    super('Please enter an address.');
  }
}
