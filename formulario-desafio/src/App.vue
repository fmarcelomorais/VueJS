<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho" >Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->
				<NomeCompleto v-model="nomeCompleto"/>
				<Rotulo nome="Email">
					<input type="text" v-model="email" placeholder="Email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="senha" placeholder="Senha">
				</Rotulo>
				<Rotulo nome="Armazenar Dados">
					<input type="checkbox" v-model="armazenado">
				</Rotulo>
				<hr>
				<button @click.prevent="enviar">Enviar</button>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				
			</form>
			<div class="painel" v-else>
				<Rotulo nome="Nome Completo">
					{{ nomeCompleto.nome }} {{ nomeCompleto.sobrenome }}
				</Rotulo>
				<Rotulo nome="Email">
					{{ email }}
				</Rotulo>
				<Rotulo nome="Senha">
					{{ senha }}
				</Rotulo>
				<Rotulo nome="Armazenar Dados">
					{{armazenado}}
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue';


export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data(){
		return{
			nomeCompleto: {
				nome: '',
				sobrenome: ''
			},
			email: '',
			senha: '',
			armazenado: true,
			enviado: false
		}
	},
	methods:{
		enviar(){
			if(this.armazenado){
				this.armazenado = 'Sim'
			}else{
				this.armazenado = 'Não'
			}
			this.enviado = !this.enviado
		}
	}
}
</script>

<style>

body {
	background-color: #eeeeee;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #000000;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: rgb(255, 255, 255);
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid rgb(255, 255, 255);
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: rgb(245, 3, 3);
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}

/* .formulario{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 20px;
	
	
}
.formulario input{
	width: 100%;
	border-radius: 5px;
	padding: 5px;
	border: none;
	border: 1px solid rgb(207, 203, 203);
	font-size: 1.2rem;
	color: rgb(58, 55, 55);
}
.formulario label{
	align-items:  flex-start;
	color: #000000;
	font-size: 1.4rem;
} */
</style>
