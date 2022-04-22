import {printAddress, MissingAddressError} from './printAddress';

describe('printAddress', () => {
  it('throws an error when person does not have an address', () => {
    const benny = {
      age: 34
    } as Person;
    expect(() => {
      printAddress(benny);
    }).toThrowError(MissingAddressError);
  });
});