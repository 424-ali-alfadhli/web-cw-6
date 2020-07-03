let Items = [];

let name = prompt("Product Name");

while (name !="Done") {
    let price = prompt("Enter Price ");
    let qunatity = prompt("Quantity");

    items.push({name2: name, price2: price, qunatity2: qunatity});

  name = prompt("Product Name");
}
for(l of items ){
    console.log(l.name2+" "+l.price2+" "+l.qunatity2);
}