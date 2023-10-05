<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import {useLikesStore} from '../stores/likesStore';

const route = useRoute()
const userId = route.params.id
const userData = ref({})
const loadingStatus = ref(true)
const error = ref(false)
const errorMessage = ref("")
const likesStore = useLikesStore();


onMounted(async () => {
	try {
		const reqResApiResponse = await fetch(`https://reqres.in/api/users/${userId}`)
		const { data } = await reqResApiResponse.json()

		userData.value = data
	} catch (e) {
		error.value = true
		console.log("Error con la API");
		errorMessage.value = "Error al consegir los datos del usuario"
	} finally {
		loadingStatus.value = false
	}
})

</script>

<template>
	<p v-if="loadingStatus">Cargando datos del usuario...</p>
	<p v-if='!loadingStatus && error'>{{ errorMessage }}</p>
	<div id="content-info-user" v-if="!loadingStatus && !error">
		<h2>{{ `${userData.first_name} ${userData.last_name}` }}</h2>
		<img :src="userData.avatar" alt="">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora hic ea aliquid quasi ex ducimus perspiciatis voluptates pariatur! Atque repellendus iste quo nisi facere sunt maxime magni ipsa dicta!</p>
		<span> <b>Email:</b> {{ userData.email }}</span>

		<div id="content-likes">
			<button @click="likesStore.increaseLikes()">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>thumb-down-outline</title><path d="M19,15V3H23V15H19M15,3A2,2 0 0,1 17,5V15C17,15.55 16.78,16.05 16.41,16.41L9.83,23L8.77,21.94C8.5,21.67 8.33,21.3 8.33,20.88L8.36,20.57L9.31,16H3C1.89,16 1,15.1 1,14V12C1,11.74 1.05,11.5 1.14,11.27L4.16,4.22C4.46,3.5 5.17,3 6,3H15M15,5H5.97L3,12V14H11.78L10.65,19.32L15,14.97V5Z" /></svg>
				{{ likesStore.likes }}
			</button>
			<button @click="likesStore.increaseDislikes()">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>thumb-up-outline</title><path d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" /></svg>
				 {{ likesStore.dislikes }}
			</button>
		</div>
	</div>
</template>

<style scoped>
#content-info-user {
	width: 30%;
	background-color: #86868b;
	border-radius: 8px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	border: 2px solid #fff;
}
  h2 {
    text-align: center;
		margin-bottom: 20px;
  }

	img {
		width: 80%;
		border-radius: 2px;
		margin-bottom: 10px;
	}

	p {
		color: #fff;
		text-align: justify;
	}
	span {
		width: 100%;
		color: #fff;
		text-align: start;
		margin-top: 20px;
	}

	#content-likes {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}

	#content-likes button{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border: none;
		outline: none;
		background-color: #242424;
		padding: 6px 20px;
	}
	#content-likes button svg{
		width: 20px;
		fill: #fff;
	}

		
@media screen and (max-width: 992px) {
	
#content-info-user {
	width: 100%;
}
}
</style>