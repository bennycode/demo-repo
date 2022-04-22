type Person = {
  age: number;
  address: {
    city: string;
  }
}

const benny = {
  age: 34
} as Person;

function printCity(person: Person) {

}

console.log(benny.address.city);