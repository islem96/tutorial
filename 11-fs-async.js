
// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, sresult) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile(
//             './content/result-async.txt',
//             `Here is the result : ${first}, ${second}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err)
//                     return
//                 }
//                 console.log('done with this task')
//             }
//         )
//     })
// })
// console.log('starting next task')
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let is_shop_open = false;
let order = function (time, work) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => { resolve(work()) }, time);
        } else {
            reject(console.log("our shop is closed"));
        }
    })
}
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    .then(() => {
        return order(0, () => { console.log("production has started") });
    })
    .then(() => {
        return order(2000, () => { console.log("the fruits was chopped"); })

    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
    })
    .then(() => {
        return order(1000, () => console.log("the machine was started"));
    })
    .then(() => {
        return order(2000, () => console.log(`ice cream was placed on ${stocks.holder[0]}`));
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[1]} added as toppings`));
    })
    .then(() => {
        return order(2000, () => console.log("serve ice cream"));
    })
    .catch(() => console.log("the customer left"))
    .finally(() => console.log("our shop is closed"))
let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    }, 2000)
};





