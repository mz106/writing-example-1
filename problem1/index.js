// Awesome app company is putting on a barbeque
// Some employees are attending and some are not
// as per the below list
// Please write some code that will create a new list
// of those attending and then send them a message (i.e. console log)

// 1: Jane, Lead developer, attending
// 2: John, junior developer, attending
// 3: Harry, marketer, not attending
// 4: Sarah, accountant, attending
// 5: Chris, accountant, not attending

// Employee Array
const employeeArr = [
  { name: "jane", role: "lead dev", isBarbeque: true },
  { name: "john", role: "junior dev", isBarbeque: true },
  { name: "harry", role: "marketer", isBarbeque: false },
  { name: "sarah", role: "accountant", isBarbeque: true },
  { name: "jane", role: "accountant", isBarbeque: false },
];

//Step 1:

// step 1.1:
// const sortEmployees = (arr) => {
//   const barbequeList = arr.map((item) => {
//     if (item.isBarbeque) {
//       return item;
//     } else {
//       return;
//     }
//   });
//   return barbequeList;
// };

// step 1.2:
// const sortEmployees = (arr) => {
//   return arr.filter((item) => item.isBarbeque);
// };

// step 2:

// step 2.1

const sortEmployees = (arr) => {
  return arr.filter((item) => item.isBarbeque);
};

const sendMessage = (arr) => {
  sortedArr.forEach((element) => {
    console.log(`Hello ${element.name}, thank you for attending the barbeque!`);
  });
};

const sortedArr = sortEmployees(employeeArr);

sendMessage(sortedArr);

// step 2.2

// const sortEmployees = (arr) => {
//   return arr.filter((item) => item.isBarbeque);
// };
// // higher order function
// const sendMessage = (fn, arr) => {
//   const sortedArr = fn(arr);

//   sortedArr.forEach((element) => {
//     console.log(`Hello ${element.name}, thank you for attending the barbeque!`);
//   });
// };

// console.log(sortEmployees(employeeArr));

// sendMessage(sortEmployees, employeeArr);
