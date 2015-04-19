var loopback = require('loopback');

var CartItem = loopback.createModel('CartItem', {
    tax: {
        type: Number,
        default: 0.1
    },
    price: {
        type: Number
    },
    item: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        default: 0
    },
    cartId: Number
});






var ds = loopback.createDataSource({
    connector: loopback.Memory
});

CartItem.attachTo(ds);


var invalidData = { item: 666, qty: "shouldBeANumber", cartId: "1" };

var invalid = new CartItem(invalidData);
console.log('valid  ? ', invalid.isValid());
console.log(invalid);
console.log('expected to throw error on shouldBeANumber');

//result is a NaN for qty
