import Vue from "vue";

export default new Vue({
    methods: {
        alterIdade(idade) {
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(calback) {
            this.$on('idadeMudou', calback)
        }
    }
})