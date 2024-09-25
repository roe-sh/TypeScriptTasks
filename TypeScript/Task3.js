var person = {
    name: "Rahaf",
    age: 23
};
if (person.age > 18) {
    console.log("Pass");
}
else {
    console.log("Minor");
}
var teacher = {
    name: "Batool Waleed",
    subjects: ["C#", "MVC", "API Core"]
};
teacher.subjects.forEach(function (subject) {
    console.log(subject);
});
var products = [
    { name: "Chips", price: 10, quantity: 6 },
    { name: "Candy", price: 20, quantity: 4 },
    { name: "Juice", price: 50, quantity: 10 }
];
products.forEach(function (product) {
    if (product.quantity > 5) {
        product.price *= 1.10;
    }
});
console.log(products);
var deviceWithStart = {
    name: "Brain",
    start: function () {
        console.log("Brain is Thinking...");
    }
};
var deviceWithoutStart = {
    name: "Monitor"
};
function startDevice(device) {
    if (device.start) {
        device.start();
    }
    else {
        console.log("Brain with default settings.");
    }
}
startDevice(deviceWithStart);
startDevice(deviceWithoutStart);
