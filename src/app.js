import Vue from 'vue';

document.addEventListener('DOMContentLoaded', function(){
    new Vue({
        el: '#app',
        data: {
            currencies: {},
            amountEntered: null,
        },
        mounted() {
            this.fetchCurrencies()
        },
        
        //add computed: do the conversion functions here
        methods: {
            fetchCurrencies: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(data => this.currencies = data);
            }
        }
    });
})