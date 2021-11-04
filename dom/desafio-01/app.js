new Vue({
    el: '#desafio',
    data: {
        titulo: 'Usando VueJS',
        nome: 'Marcelo',
        idade: 34,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzAp6ZUXWH0sSEaRfs0NVrSa7KGD2BrUgZsgQBdpn0Q7DYiwLBQ5-ipHS2shWJO8eafQ8&usqp=CAU'
    },
    methods: {
        aleatorio() {
            return Math.random().toFixed(1);
        }
    },
})