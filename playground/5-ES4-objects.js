// const name = 'Aidas'
// const userAge = 24

// const user = {
//     name,
//     age: userAge,
//     location: 'Vilnius'
// }

// console.log(user)

// object destructuring

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)


const product = {
    label: 'Red notebook',
    price: 3,
    stock: undefined,
    salePrice: undefined,
    rating: 4.2
}


const transaction = (type, { label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)