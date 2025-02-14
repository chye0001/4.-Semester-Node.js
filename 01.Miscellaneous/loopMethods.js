// forEach, map, filter, reduce, findIndex, find

const myNumbers = [1, 2, 3, 4, 5, 6];

// assignment: get a list of double the numbers;
const doubleNumbers = myNumbers.map((myNumbers) => myNumbers * 2);
console.log(doubleNumbers);






// assignment: lower the height for all satellites by 3.000 except for MIR
const satellites = [
  {
    name: "International Space Station",
    height: 12_000,
  },
  {
    name: "MIR",
    height: 0,
  },
  {
    name: "James Webb",
    height: 27_000,
  },
  {
    name: "Hubble Space Telescope",
    height: 13_000,
  },
];


const modifiedSatellitesHeight = satellites.map((satellite) => {
  if (satellite.name === "MIR") {
    return satellite;
  }

  return {
    name: satellite.name,
    height: satellite.height - 3000,
  };
});
console.log(modifiedSatellitesHeight);


// Optimized
const optimizedModifiedSatellitesHeight = satellites.map((satellite) => ({
  name: satellite.name,
  height: satellite.name === "MIR" ? satellite.height : satellite.height - 3000,
}));
console.log(optimizedModifiedSatellitesHeight);






// assignment: make a list that reacts as many times as down below with thumbs up
const listOfReactions = ["tumbs down", "tumbs down", "tumbs down"];

const updatedReactions = listOfReactions.map(() => "tumbs up")
console.log(updatedReactions)
