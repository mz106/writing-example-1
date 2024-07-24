// Awesome App Company is editing the data structure of employee data
// Currently, an employee's data is stored in an object thus;

const exampleEmployee1 = {
  id: 1,
  name: "claire",
  job_title: "developer",
};

// The key "job_title" is to be changed to "role";

const exampleEmployee2 = {
  id: 1,
  name: "claire",
  role: "developer",
};

// Write a prgoram that will;

// 1. Edit all employee objects in the respective array
// 2. Send a message (i.e. console log) to all employees
//    informing them of the change, addressing them by name

const employeeArr = [
  { id: 1, name: "jane", job_title: "lead dev" },
  { id: 2, name: "john", job_title: "junior dev" },
  { id: 3, name: "harry", job_title: "marketer" },
  { id: 4, name: "sarah", job_title: "accountant" },
  { id: 5, name: "jane", job_title: "accountant" },
];
