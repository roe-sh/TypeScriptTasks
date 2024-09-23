let num: number = 6;

if (num % 2 === 0)
{
    console.log("Number is even");
}else
{
    console.log("Number is odd");
}


let prices: number[] = [1000, 2000, 3000];
let price: number = 1500;
for (let i = 0; i < prices.length; i++){
    if (prices[i] > price)
    {
        console.log(prices[i]);
    }
}

let admins: any[] = [{Name: "admin1", age: 50, isAdmin: true}, {Name: "admin2", age: 40, isAdmin: true}, {Name: "admin3", age: 65, isAdmin: true}, {Name: "admin4", age: 35, isAdmin: true}];
let oldest: number = 0
let oldestName: string = ""
for (let i = 0; i < admins.length; i++){
    if (admins[i].age > oldest)
    {
        oldest = admins[i].age
        oldestName = admins[i].name
    }
}
console.log(`the oldest admin is ${oldestName} and his age is ${oldest}`);