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

// Step 1:

// Step 1.1:
// function to create new list with barbeque attendees

// const getAttendees = (arr) => {
//   const newArr = arr.map((item) => {
//     if (item.isBarbeque) {
//       return item;
//     }
//   });

//   return newArr;
// };

// console.log(getAttendees(employeeArr));

// Step 1.2:

const getAttendees = (arr) => {
  const newArr = arr.filter((item) => item.isBarbeque);

  return newArr;
};

// Step 2:

//Step 2.1
// const sendMessage = (arr) => {
//   arr.forEach((item) =>
//     console.log(`Hi ${item.name}, thanks for coming to the barbeque!`)
//   );
// };

// Step 2.2

const sendMessage = (fn, arr) => {
  const sortedArr = fn(arr);
  sortedArr.forEach((item) =>
    console.log(`Hi ${item.name}, thanks for coming to the barbeque!`)
  );
};

sendMessage(getAttendees, employeeArr);
