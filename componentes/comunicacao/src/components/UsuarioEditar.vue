<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Nome do Usuario: <strong>{{nome}}</strong></p>
        <p>Idade do usuario: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props: {
        nome: String,
        idade: Number
    },
    methods: {
        alterarIdade(){
            this.idade += 1
            barramento.alterIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
