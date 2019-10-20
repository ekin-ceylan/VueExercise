Vue.config.keyCodes = {
    f1: 112
};

var growler = new Vue({
    el: document.getElementById('growler'),
    data: {
        appName: 'Growler',

        query: '',
        emailMessage: '',

        isPowerSyntaxEnabled: true,
        searchIndexes: ['beers'],

        searchIndex: 'beers',

        selectedSearchIndex: '',
        selectedSearchIndexes: ['pubs'],

        htmlContent: '<a href="#" style="cursor:inherit">Growler Link</a>',
        appLogo: 'Untitled.png',
        color: 'red',
        appStyle: {
            width: '100%',
            height: '500px',
            border: 'solid red 2px'
        },
        link: {
            fontStyle: 'italic',
            color: 'red'
        },
        header: {
            fontSize: '35px'
        },
        boldFont: {
            fontWeight: 'bold'
        },
        thinFont: {
            fontWeight: 'light'
        },
        styleClass: ['colorGreen', 'fontWeight'],
        isOnline: false,
        contextMenu: {
            displayed: false,
            style: {
                top: '0px',
                left: '0px'
            }
        }
    },

    methods: {
        executeSearch: function (event) {
            let text = 'Query: "' + this.query + '", Button: "' + event.target.innerText + '"';
            console.log(text);
        },
        evaluateKey: function (event) {
            let text = 'evaluating...';
            console.log(text);
        },
        submitSearch: function (event) {
            if (this.query) {
                document.forms[0].submit();
            } else {
                console.log('Please enter a query');
            }
        },
        buttonGrandparentClick: function () {
            console.log('granpaBubbled');
        },
        buttonParentClick: function () {
            console.log('parentBubbled');
        },
        openInfo: function (event) {
            let text = 'openinginfo...';
            console.log(text);
        },
        onBlockClick: function (e) {
            this.contextMenu.displayed = true;
            this.contextMenu.style.top = e.y + 'px';
            this.contextMenu.style.left = e.x + 'px';
        },
        closeContextMenu: function (e) {
            console.log('close');
            this.contextMenu.displayed = false;
        },
        onCopyClick: function () {
            alert('copy something');
            this.closeContextMenu();
        },
        onPasteClick: function () {
            alert('paste something');
            this.closeContextMenu();
        }
    }
});


var growler2 = new Vue({
    el: document.getElementById('growler2'),
    data: {
        appName: 'Growler',

        beers: [
            { name: 'efes', abv: 9.6 },
            { name: 'miller', abv: 7.4 },
            { name: 'tuborg', abv: 3.7 },
            { name: 'bomonti', abv: 6.5 }
        ],

        maxAbv: 7.0,
        pageCount: 4,

        currentUser: {
            firstName: 'Chad',
            fingers: 10,
            tags: ['male', 'scorpio'],
            socialMedia: {
                twitter: '@ecofic',
                youtube: 'ecofic'
            }
        }
    },
    methods: {
        search: function (page) {
            console.log(page);
        }
    }
});

var reacting = new Vue({
    el: document.getElementById('reacting'),

    data: {
        appName: 'Growler',

        beers: [
            { name: 'efes', price: 9.635},
            { name: 'miller', price: 7.44546},
            { name: 'tuborg', price: 3.74534 },
            { name: 'bomonti', price: 6.53434 },
            { name: 'AhoolAle', price: 2.8434 },
            { name: 'AgogweAle', price: 2.35543 }
        ],
        shoppingCart: [],
        subTotal: 0.00,
        canConnect: false
    },
    computed: {
        isOnline: function () {
            return this.canConnect ? 'Yes' : 'No';
        }
    },
    created: function () {
        axios.get('https://www.ecofic.com').then(function (res) {
            this.canConnect = true;
        }).catch(function (err) {
            this.canConnect = false;
        });
    },
    watch: {
        // shoppingCart: function () {
        //     this.updateSubTotal();
        // }

        //shoppingCart: 'updateSubTotal'

        handler: function (latest, original) {
            this.updateSubTotal()
        },
        deep: true

    },
    filters: {
        fixPrice: function (value) {
            if (!value) { return ''; }
            value = value.toFixed(2)
            return value;
        }
    },
    methods: {
        updateSubTotal: function () {

            var s = this.shoppingCart.length;
            var t = 0;

            for (var i = 0; i < s; i++) {
                t += this.shoppingCart[i].price;
            }

            this.subTotal = t.toFixed(2);
        },
        buy: function (beer) {
            this.shoppingCart.push(beer);
        }
    }
});