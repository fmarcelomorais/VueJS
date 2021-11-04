new Vue({
    el: '#desafio',
    data: {
        valor: '',
        inp1: ''
    },
    methods: {
        alerta() {
            alert('Você clicou!!!')
        },
        clicou(e) {
            this.valor = e.target.value;
        },
        clicou2(e) {
            this.valor = e.target.value;
        }
    },
})