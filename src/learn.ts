// interface User {
//     name: string,
//     email: string,
//     phone?: string,
//     active?: boolean,
// }

// const uder1 : Readonly<User>={
//     name: 'Joy',
//     email: 'joy@gmail.com',
//     phone: '01788888'
// }
// // uder1.phone = 'Nai'

// console.log(uder1);

const product: { name: string, price: number, inStock: boolean }[] = [
    { name: 'Laptop', price: 200, inStock: true, },
    { name: 'Computer', price: 100, inStock: false, }
]

// for(const item of product){
//     console.log(`${item.name} - $${item.price} -In stock: ${item.inStock}`);

// }

function discountPrice(price: number, discount: number = 10): number {
    const finalPrice = price - (price * discount) / 100;
    return finalPrice;
}

// console.log(discountPrice(200));
// console.log(discountPrice(300, 20));

let id: number | string;

id = 101;
id = 'User-1';
// id = true

function printId(id: number | string): void {
    console.log("Your ID", id);
}

printId(101);
printId("user-1")


function displayUserInput(value: number | string): void {
    if (typeof value === "string") {
        console.log('You entered a string:', value.toLowerCase());

    } else {
        console.log('You entered a number:', value * 1);
    }
}

displayUserInput(42)
displayUserInput("Hello")