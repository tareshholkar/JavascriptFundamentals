const people = [
  {
    id: 10021,
    name: "Anna",
    email: "anna@greatcompany.com",
  },
  {
    id: 10022,
    name: "Riley",
    email: "riley@greatcompany.com",
  },
  {
    id: 10023,
    name: "Nathan",
    email: "nathan@greatcompany.com",
  },
  {
    id: 10023,
    name: "Jessica",
    email: "jessica@greatcompany.com",
  },
];

const jobs = [
  {
    id: 10021,
    title: "Engineer",
  },
  {
    id: 10022,
    title: "Quality Assurance",
  },
  {
    id: 10023,
    title: "Product Owner",
  },
];
const merge = [];
var person = people.map((person) => {
  person.id;

  jobs.map((job) => {
    if (person.id === job.id) {
      console.log(person.id, job.id, person.name);
      merge.push({ ...person, ...job });
    }
  });
});
console.log(merge);
