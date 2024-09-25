interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Rahaf",
    age: 23
};

if (person.age > 18) {
    console.log("Pass");
} else {
    console.log("Minor");
}


////////////////////////////////////////////////////////////////
interface Teacher {
    name: string;
    subjects: string[];
}

const teacher: Teacher = {
    name: "Batool Waleed",
    subjects: ["C#", "MVC", "API Core"]
};

teacher.subjects.forEach(subject => {
    console.log(subject);
});

////////////////////////////////////////////////////////////////////////////////////////////

interface Product {
    name: string;
    price: number;
    quantity: number;
}

const products: Product[] = [
    { name: "Chips", price: 10, quantity: 6 },
    { name: "Candy", price: 20, quantity: 4 },
    { name: "Juice", price: 50, quantity: 10 }
];

products.forEach(product => {
    if (product.quantity > 5) {
        product.price *= 1.10;  
    }
});

console.log(products);

/////////////////////////////////////////////////////////////////////////////////////
interface Device {
    name: string;
    start?: () => void;
}

const deviceWithStart: Device = {
    name: "Brain",
    start: () => {
        console.log("Brain is Thinking...");
    }
};

const deviceWithoutStart: Device = {
    name: "Monitor"
};

function startDevice(device: Device) {
    if (device.start) {
        device.start();
    } else {
        console.log("Braining  with default settings.");
    }
}

startDevice(deviceWithStart);   
startDevice(deviceWithoutStart); 
