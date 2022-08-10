const candy = [
{
    "candyID" : "1",
    "title": "Peach Gummy Rings",
    "categoryID": "gummy",
    "description": "Full of Flavor",
    "price": 6.99,
    "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/51dEzK-%2BA7L.jpg"
},
{
    "candyID" : "2",
    "title": "Sno Caps",
    "categoryID": "chocolate",
    "description": "Great winter chocolate snack",
    "price": 4.99,
    "pictureUrl": "http://cdn.shopify.com/s/files/1/1322/9789/products/snowcaps_1024x1024.jpg?v=1471204851"
},
{
    "candyID" : "3",
    "title": "Classic Gummy Bears",
    "categoryID": "gummy",
    "description": "Cannot be a candy fanatic without these",
    "price": 5.99,
    "pictureUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWpKkQ9OSTXhCJqJqTlBVMHWTGfuyellPpMaOQWQXNQmDW6CGgaknOulL24FwjZelGaQ&usqp=CAU"
},
{
    "candyID": "4",
    "title": "Sour Belts",
    "categoryID": "sour",
    "description": "Sour belts that pack a punch",
    "price": 4.59,
    "pictureUrl": "https://i.pinimg.com/originals/9b/96/69/9b96691367d55a93aeb4d84bb61ae111.png"
},
{
    "candyID": "5",
    "title": "Duvalin (Chocolate & Vanilla",
    "categoryID": "latinAmerican",
    "price": 4.99,
    "description": "Creamy mexican candy favorite, you'll want another one",
    "pictureUrl": "https://cdn.shopify.com/s/files/1/0151/1051/products/ricolino-duvalin-bi-sabor-avellana-y-vainilla-hazelnut-and-vanilla-18ct-952-oz-562099_800x.jpg?v=1622215735"
}
]
export const getProducts = () => {
return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(candy);
            //console.log('Descargar completa!', candy);
        }, 2000)
    }) 
}

 export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(candy.filter(item => item.categoryID === categoryId));
        }, 500)
    })
    }

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(candy.find(prod => prod.candyID === id));
        }, 500)
    })
}
