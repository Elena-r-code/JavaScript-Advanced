function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let products = [new Product ("potatoes", "food", null, 10),
new Product ("milk", "food", null, 20),
new Product ("shirt", "clothes", 30, 150),
new Product ("scarf", "clothes", 10, 20),
new Product ("tennis ball", "sport", null, 300),
new Product ("bread", "food", 5, 30),
new Product ("parachute", "sport", 60, 500),
new Product ("table", "home", 10, 700),
new Product ("chair", "home", null, 300),
new Product ("apple", "food", null, 35),
new Product ("snickers", "food", 10, 15),
new Product ("jeans", "clothes", null, 200),
new Product ("clock", "home", 10, 100),
new Product ("jacket", "clothes", 50, 400),
new Product ("sugar", "food", null, 30),
];

console.log("Products that cost more than 20: ");

let productsGreaterThan20 = products.filter(product => product.price > 20);
productsGreaterThan20.forEach(product => console.log(product.name));

console.log("Products of category food that are on discount:");

let categoryFood = products.filter(product => product.category === "food");
let foodOnDiscount = categoryFood.filter(product => product.hasDiscount !==null);
foodOnDiscount.forEach(product => console.log(product.name));




let productsOnDiscount = products.filter(product => product.hasDiscount !==null );
let average = 0;
for(let i=0; i<productsOnDiscount.length;i++){
average = average + productsOnDiscount[i].price/productsOnDiscount.length;
}

console.log("The average price of all products that are on discount:")
console.log(average);



let productsNotOnDiscount = products.filter(product => !product.hasDiscount);

console.log("Products that start with vowel and are not on discount:");

for(let i =0; i<productsNotOnDiscount.length; i++){
    let fLetter = productsNotOnDiscount[i].name[0];
    
    if(fLetter ==="a" || fLetter ==="e" || fLetter ==="i" || fLetter ==="o" || fLetter ==="u" ){
        console.log("Product : " + productsNotOnDiscount[i].name);
        console.log("Price : " + productsNotOnDiscount[i].price);
    }
}

function copyProducts(array){
    let copied = [];
    array.forEach(product => copied.push(product));
    return copied;
}

let productsCopy = copyProducts(products);
productsCopy.sort((p1, p2) => p1.price - p2.price);
console.log("Sorted products : ");
productsCopy.forEach(product => console.log("Product: " + product.name + " "+ " Price: " + " " + product.price));
