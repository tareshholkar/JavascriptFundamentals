var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  let initialValues = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  };
  let result = arr.reduce((acc, currentValue) => {
    if (currentValue.age > 18 && currentValue.age <= 25) {
      acc.numYoungPeople += 1;
      if (currentValue.voted === true) {
        acc.numYoungVotes += 1;
      }
    } else if (currentValue.age > 26 && currentValue.age < 35) {
      acc.numMidsPeople += 1;
      if (currentValue.voted === true) {
        acc.numMidVotesPeople += 1;
      }
    } else {
      acc.numOldsPeople += 1;
      if (currentValue.voted === true) {
        acc.numOldVotesPeople += 1;
      }
    }
    return acc;
  }, initialValues);
  return result;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
