const carsByMake = [["A122"], ["C150"], ["B151"], ["D154"]];

const dates = [new Date(), new Date()];

const carMakers = ["Wagnar", "Suzuki", "Thar"];

// Help with 'map'
carMakers.map((car) => {
  const m = car.toUpperCase();
  console.log(m);
});

// Flexible Types
const importantDates: (Date | string)[] = [];
importantDates.push("2024-05-09");
importantDates.push(new Date());
// importantDates.push(100);        //Argument of type 'number' is not assignable to parameter of type 'string | Date'.
