<template>
  <Rotulo nome="Nome Completo">
      <input type="text"
        :value="value.nome" 
        @input="alterarNome"
        placeholder="Nome">

      <input type="text"
      :value="value.sobrenome"
      @input="alterarSobreNome"
      placeholder="Sobrenome" >
  </Rotulo>
  
</template>

<script>
import Rotulo from './Rotulo.vue'
export default {
    components: {Rotulo},
    props: {
        value:{
            type: Object,
            required: true
        },
        },
    methods: {
        alterarNome(event){
            this.$emit('input',
            {nome: event.target.value,
            sobrenome: this.value.sobrenome})
        },
        alterarSobreNome(event){
            this.$emit('input',
            {nome: this.value.nome,
            sobrenome: event.target.value})
        }
    },

}
</script>

<style>

</style>