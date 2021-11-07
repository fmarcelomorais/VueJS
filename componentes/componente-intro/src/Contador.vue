<template>
  <div class="contador">
      <span>{{contador}}</span>
      <button class="btn" @click="adicionar">+</button>
      <button class="btn" @click="reduzir">-</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            contador: 0,
        }
    },
    methods: {
        adicionar(){
            this.contador++
        },
        reduzir(){
            this.contador--
        }
    },
}
</script>

<style scoped>
    span{
        font-size: 50px;
        font-family: sans-serif;
    }
    .btn{
        width: 50px;
        height: 50px;
        margin:  10px;
        padding: 5px;
        color: #fff;
        font-size: 25px;
        border-radius: 50%;
        outline: none;
        background-color: blueviolet;
    }
</style>