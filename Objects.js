/*
* Programming Quiz: Umbrella
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `umbrella`
* - The variable `umbrella` should be an object
* - Your `umbrella` object should have the `color` and `isOpen`
property
* - Your `umbrella` object should have an `open()` method that toggles
the value of `isOpen` property
* - Your `umbrella` object should have an `close()` method that toggles
the value of `isOpen`
*/




var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
           return "The umbrella is already opened!"; 
        }
        else{
            umbrella.isOpen = true;
            return "Julia opens the umbrella"
        }
    },
    close:function () {
        if (!umbrella.isOpen) {
            return "The umbrella is already closed!";
        }
        else{
            umbrella.isOpen = false;
            return "Julia closes the umbrella";
        }
    }
};
umbrella.close();




/*
* Programming Quiz: Menu Items
* Create an object named `breakfast`.
* The object should contain properties for the `name`, `price`, and
`ingredients`.
* Print the entire object on the console
*/
// your code goes here



const breakfast = {
    "name": 'Lasagne',
    "price": 15.99,
    "ingredients": "eggs', 'tomatoes', 'pancakes', 'sausage",
}
console.log(breakfast);




/*
* Programming Quiz: Bank Accounts 1
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have an object `savingsAccount`
* - Your `savingsAccount` object should have the `balance` and
`interestRatePercent` property
* - Your `savingsAccount` object should have a `printAccountSummary()`
method
* - Your `printAccountSummary()` method should return the EXACT
expected message
* - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE
PRINTED.
*/



const savingsAccount = {
   balance: 1000,
   interestRatePercent: 1,
   deposit: function addMoney(amount) {
       if (amount > 0) {
           savingsAccount.balance+= amount;
       }
   },
   withdrawal: function removeMoney(amount) {
       var verifyBalance = savingsAccount.balance - amount;
       if (amount > 0 && verifyBalance >= 0) {
           savingsAccount.balance -= amount;
       }
   },
   printAccountSummary: function () {
       if (savingsAccount.balance === 1000 && savingsAccount.interestRatePercent=== 1) {
           return ("Welcome! Your balance is currently $"+ this.balance + " and your interest rate is "+ this.interestRatePercent + "%");
       }
   }
};
console.log(savingsAccount.printAccountSummary());







/*
* Programming Quiz: Facebook Friends
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have an object `facebookProfile`
* - The `facebookProfile` object should have the `name` (string),
`friends` (number), and `messages` (array of strings) property
* - Your `facebookProfile` object should have the `postMessage()`,
`deleteMessage()`, `addFriend()` and `removeFriend()` method
* - Carefully implement the desired functionality of each method, as
decribed above
*/
// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method
// your code goes here




const facebookProfile = {
    name: "Romeo Omoregie",
    friends: 208000,
    message: ["I love Manchester United", "Ole Out!", "Mehn programming is fun!", "This country nawa o!"],
    postMessage: function addMsg() {
        return facebookProfile.message.push("I love JavaScript yaay!");
    },
    deleteMessage: function () {
        return facebookProfile.message.splice(1,1);
    },
    addFriend: function () {
        return facebookProfile.friends += 1;
    },
    removeFriend:function () {
        return facebookProfile.friends -= 1; 
    }
};





/*
* Programming Quiz: Donuts Revisited
*/
/*
* QUIZ REQUIREMENTS
* - Your code sshould have an array named `donuts`
* - Your `donuts` array should call the `forEach()` method
* - Your `forEach()` loop should output the donut summaries
* - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE
PRINTED.
*/
// This is an array of objects.

// your code goes here





const donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
    ];
    donuts.forEach(function (donut) {
        console.log(donut.type + " donuts "  +"cost " +"$" + donut.cost + " each");
    })

 

    