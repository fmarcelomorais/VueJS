<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de Usuario: <strong>{{ nome }}</strong></p>
        <p>Idade do Usuario: <strong>{{ idade }}</strong></p>
        <button @click="reinicializarNome"> Reinicializar Nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:{
        nome: String,
        idade: Number
    }, // propriedades que serão recebidas do comp. PAI
    methods:{
        reinicializarNome(){
            this.nome = 'Marcelo'
            this.$emit('nomeMudou', this.nome)
        }
    },
    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
