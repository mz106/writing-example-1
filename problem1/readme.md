# Problem 1

## Description

    Awesome app company is putting on a barbeque
    Some employees are attending and some are not
    as per the below list.

    Please write some code that will create a new list
    of those attending and then send them a message (i.e. console log).

    1: Jane, Lead developer, attending
    2: John, junior developer, attending
    3: Harry, marketer, not attending
    4: Sarah, accountant, attending
    5: Chris, accountant, not attending

## Starter Code

    // Employee Array
    const employeeArr = [
        { name: "jane", role: "lead dev", isBarbeque: true },
        { name: "john", role: "junior dev", isBarbeque: true },
        { name: "harry", role: "marketer", isBarbeque: false },
        { name: "sarah", role: "accountant", isBarbeque: true },
        { name: "jane", role: "accountant", isBarbeque: false },
    ];

## Plan

This problem can be broken down into two distinct tasks;

1. Filter the list
2. Send a message to those attending the barbeque

## Step 1

### Step 1.1

Function name: getAttendees
Purpose: filter employeesArr and create new arr
Arguments: employeeArr (type: Array)
Methods: .map()

Code:

    const getAttendees = (arr) => {
        const newArr = arr.map((item) => {
            if (item.isBarbeque) {
            return item;
            }
        });

        return newArr;

};

This returned the following;

    [
    { name: 'jane', role: 'lead dev', isBarbeque: true },
    { name: 'john', role: 'junior dev', isBarbeque: true },
    undefined,
    { name: 'sarah', role: 'accountant', isBarbeque: true },
    undefined
    ]

Result: Failure
Issue: Returned attending employees and 'undefined' for non-attending employees

### Step 1.2

After research it was decided to use .filter() instead of .map().

Link to research: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Function name: getAttendees
Purpose: filter employeesArr and create new arr
Arguments: employeeArr (type: Array)
Methods: .filter()

Code:

    const getAttendees = (arr) => {
        const newArr = arr.filter((item) => item.isBarbeque);
        return newArr;
    };

This returned the following;

    [
        { name: 'jane', role: 'lead dev', isBarbeque: true },
        { name: 'john', role: 'junior dev', isBarbeque: true },
        { name: 'sarah', role: 'accountant', isBarbeque: true }
    ]

These are the correct data, and so this part of the task has been completed.

## Step 2

### Step 2.1

Function name: sendMessage
Purpose: console log message for each employee
Arguments: getAttendees (type: function)
Methods: .forEach()
Example: "Hi Jane, thanks for coming to the barbeque!"

Code:

    const sendMessage = (arr) => {
        arr.forEach((item) =>
            console.log(`Hi ${item.name}, thanks for coming to the barbeque!`)
        );
    };

The functions were called thus;

    sendMessage(getAttendees(employeeArr));

This, when called with getAttendees returned the following;

    Hi jane, thanks for coming to the barbeque!
    Hi john, thanks for coming to the barbeque!
    Hi sarah, thanks for coming to the barbeque!

<!-- This program return the desired result. However, the sendMessage function could
be improved by making it a higher-order function and passing getAttendees and an
argument. -->

Result: Success
Comments: func sendMessage can be more robust as a higher-order function,
and have getAttendees passed to it

### Step 2.2

Higher-Order Functon research link:

https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/

Code:

    const sendMessage = (fn, arr) => {
        const sortedArr = fn(arr);
        sortedArr.forEach((item) =>
        console.log(`Hi ${item.name}, thanks for coming to the barbeque!`)
        );
    };

    sendMessage(getAttendees, employeeArr);

This code now returns the desired result.
