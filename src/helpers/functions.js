export function getCountProductsInCart(){
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart.products.length : 0;
};

export const calcSubPrice = product => +product.count * product.item.price;

export const calcTotalPrice = products => {
    return products.reduce((pV, cur) => {
        return (pV += cur.subPrice);
    }, 0);
};

// {
//     products: [
//         {
//             item: {
//                 name: Mac,
//                 price: 3200
//             },
//             count: 10,
//             subPrice: 32000
//         },
//         {
//             item: {
//                 name: Samsung,
//                 price: 1200
//             },
//             count: 7,
//             subPrice: 8400
//         }
//     ],
//     totalCost: 40400
// }

