
import fs from 'fs'

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


const prod_api_example = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
};


let medusa_products = [];
const sizes = ["SM", "ME", "LA", "XLA", "XXLA"];
const colors = ["Violet", "Red", "Yellow", "Blue", "Green"];
const currencies = ["jpy", "usd", "all", "czk",  "aud"]

// const response = await fetch('https://fakestoreapi.com/products');
const path = 'https://dummyjson.com/products'
const response = await fetch('https://dummyjson.com/products');
let body = await response.json();
if (path === 'https://dummyjson.com/products') {
    body = body['products']
}
for (const product of body) {
    const title = product.title;
    const description = product.description;

    const handle = title.toLowerCase().replaceAll(' ', '') + makeid(2);
    const images = product.image ? [product.image] : product.images
    const weight = Math.floor(Math.random() * 1000) + 10;
    const p_sizes = sizes.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * sizes.length) + 1);
    const p_colors = colors.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * colors.length) + 1);
    const options = [
        {
            "title": "Size",
            "values": p_sizes
        },
        {
            "title": "Color",
            "values": p_colors
        }
    ];
    let prices = [];
    for (const c of currencies) {
        prices.push(
            {
                "currency_code": c,
                "amount": Math.floor(Math.random() * 1000) + 10
            }
        );
    }

    let variants = [
    ];

    let options_variants = []
    for (const o of options) {
        options_variants.push(
            {
                "value": options.sort(() => 0.5 - Math.random()).slice(0, 1)
            }
        )
    }

    for (const i of Array.from(Array(3).keys())) {
        const v = {
            "title": (Math.random() + 1).toString(36).substring(2),
            "prices": prices,
            "options": options_variants,
            "inventory_quantity": Math.floor(Math.random() * 1000) + 10,
            "manage_inventory": true
        }
        variants.push(v)
    }

    medusa_products.push({
        title,
        description,
        handle,
        images,
        weight,
        options,
        prices,
        variants
    });
}


fs.writeFile('fake_products.json', JSON.stringify(medusa_products), 'utf8', callback =>{return});
