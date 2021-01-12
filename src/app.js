import Vue from 'vue';

document.addEventListener('DOMContentLoaded', function(){
    new Vue({
        el: '#app',
        data: {
            currencies: {},
            selected: null,
        },
        mounted() {
            this.fetchCurrencies()
        },
        
        //add computed to be running in the background
        methods: {
            fetchCurrencies: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(response => response.json())
                .then(data => this.currencies = data);
            }
        }
    });
})