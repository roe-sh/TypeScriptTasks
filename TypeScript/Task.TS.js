var num = 6;
if (num % 2 === 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
var prices = [1000, 2000, 3000];
var price = 1500;
for (var i = 0; i < prices.length; i++) {
    if (prices[i] > price) {
        console.log(prices[i]);
    }
}
var admins = [{ Name: "admin1", age: 50, isAdmin: true }, { Name: "admin2", age: 40, isAdmin: true }, { Name: "admin3", age: 65, isAdmin: true }, { Name: "admin4", age: 35, isAdmin: true }];
var oldest = 0;
var oldestName = "";
for (var i = 0; i < admins.length; i++) {
    if (admins[i].age > oldest) {
        oldest = admins[i].age;
        oldestName = admins[i].name;
    }
}
console.log("the oldest admin is ".concat(oldestName, " and his age is ").concat(oldest));
