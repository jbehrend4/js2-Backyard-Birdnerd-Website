Vue.component('list', {
    props: {
        items: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            default: ""
        }
    },

    data: function() {
        return {
            shoppingCart: []
        }
    },

    methods: {
        add: function (item) {
            item.qty++;
        },

        subtract: function (item) {
            if (item.qty > 1) {
                item.qty--;
            }
        },

        addToCart: function (shoppingCart, item, qty ) {
            for (i = 0; i < qty; i++) {
                shoppingCart.unshift(item);
            }
            console.log(shoppingCart)
        },

        emptyCart: function () {
            this.shoppingCart = [];
        },
        calculateTotalCost: function (shoppingCart) {
            var totalPrice = 0;
            shoppingCart.forEach(function (item) {
                totalPrice += item.price;
            })
            console.log("$" + totalPrice.toFixed(2));
        }
    },

    template: `<div class="item-store">
                <h3>{{name}}</h3>
                <ul class="list-group list-group-flush">
                    <li v-for="(item, i) in items" :key="item.name" class="list-group-item">
                        <div class=" d-flex justify-content-between">
                            <div>
                                <small>{{item.desc}}</small><br>                            
                                <small>Price: $ {{item.price}}</small><br>
                                <small>Quantity to Add to Cart: {{item.qty}}</small><br>
                                <button @click="addToCart(shoppingCart, item, item.qty)">Add to Cart</button>
                                <button @click="calculateTotalCost(shoppingCart)">Calculate Total Cost</button>
                            </div>
                            <div>
                                <button class="btn btn-tiny" @click="add(item)"><i class="fas fa-plus-circle"></i></button>
                                <button class="btn btn-tiny" @click="subtract(item)"><i class="fas fa-minus-circle"></i></button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>`,

});