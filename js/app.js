var app = new Vue({
    // el: the DOM element to be replaced with a Vue instance
    el: '#app',
    // data: all the data for the app
    data: {
        newItem: {
            name: 'Name',
            qty: 1,
            category: 'calendar',
            desc: 'Sample description',
            price: 0.99,
        },

        storeItems: [
            { name: '2020 Bird Calendar', qty: 1, category: 'bird', desc: 'This 2020 Bird Calendar is filled with pictures of birds that reflect the time of the season.', price: 9.99 },
            { name: '2020 Deer Calendar', qty: 1, category: 'deer', desc: 'This 2020 Deer Calendar is filled with pictures of deer in a variety of environments', price: 9.99},
            { name: '2020 Scenery Calendar', qty: 1, category: 'scenery', desc: 'This 2020 Scenery Calendar is filled with pictures of beautiful Mother Nature', price: 9.99},
            { name: 'Bird Picture Canvas', qty: 1, category: 'bird', desc: 'Get a large print canvas of your chosen bird picture', price: 129.99 },
            { name: 'Deer Picture Canvas', qty: 1, category: 'deer', desc: 'Get a large print canvas of your chosen deer picture', price: 129.99 },
            { name: 'Scenery Picture Canvas', qty: 1, category: 'scenery', desc: 'Get a large print canvas of your chosen nature picture', price: 129.99 },
            { name: 'Bird Print Picture', qty: 1, category: 'bird', desc: 'Get a 8x10 version of your chosen bird picture', price: 4.99 },
            { name: 'Deer Print Picture', qty: 1, category: 'deer', desc: 'Get a 8x10 version of your chosen deer picture', price: 4.99},
            { name: 'Scenery Print Picture', qty: 1, category: 'scenery', desc: 'Get a 8x10 version of your chosen nature picture', price: 4.99},
        ],

        shoppingCart: [],

    },
    // methods: usually "events" triggered by v-on:
    methods: {

    },
    // computed: values that are updated and cached if dependencies change
    //Computed value functions need to return a value
    computed: {
        birdList: function () {
            return this.storeItems.filter(function (item) {
                return item.category === 'bird';
            })
        },
        deerList: function () {
            return this.storeItems.filter(function (item) {
                return item.category === 'deer';
            })
        },
        sceneryList: function () {
            return this.storeItems.filter(function (item) {
                return item.category === 'scenery';
            })
        }
    },
    //mounted:  called after the instance has been mounted,
    mounted: function() {
        if(localStorage.getItem('storeItems')) {
            this.storeItems = JSON.parse(localStorage.getItem('storeItems'));
        }
    },
    // watch: calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        storeItems: {
            handler: function (newList) {
                localStorage.setItem('storeItems', JSON.stringify(newList));
            },

            deep: true
        }
    }
});