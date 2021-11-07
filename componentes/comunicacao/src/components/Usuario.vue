<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{nome}}</strong></p>
        <p>Nome é <strong>{{idade}}</strong></p>
        <button @click="alterarNome">Alterar nome</button>        
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome"
                @nomeMudou="nome= $event" 
                :idade="idade"/>
            <app-usuario-editar 
                :nome="nome"
                :idade="idade"             
                />
        </div>
    </div>
</template>

<script>
import barramento from '@/barramento'

import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome: 'Marcelo',
            idade: 34
        }
    },
    methods: {
        alterarNome(){           
            this.nome = 'Morais'
        },

    },
    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
