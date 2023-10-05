<script setup>
import { ref } from 'vue';


const users = ref([])


async function loadUsers() {
	const reqResApiResponse = await fetch('https://reqres.in/api/users')
	const { data } = await reqResApiResponse.json()

	users.value = data
}

loadUsers()
</script>


<template>
	<section>
	    <h2>Users List</h2>
		<ul class="users-list">
			<li v-for="user in users" :key="user.id" class="user-list-item">
				<RouterLink :to="{name: 'Detalles', params: {id: user.id} , path: '/detalles/:id' }">
					<img :src="user.avatar" >
					<h3>{{ `${user.first_name} ${user.last_name}` }}</h3>
				</RouterLink>
			</li>
		</ul>
	</section>
</template>

<style scoped>
  h2 {
    text-align: center;
		margin: 20px 0px;
  }
.users-list {
	list-style: none;
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3 , 1fr);
	margin-top: 20px;
}

.user-list-item {
	width: 100%;
}
.user-list-item >a{
	width: 100%;
	padding: 20px;
	background-color: #414141;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: ease all .6s;
	border: 2px solid transparent;
}
	.user-list-item >a:hover{
		transform: scale(1.05);
		border: 2px solid #86868b;
	}

.user-list-item img{
	width: 90%;
	border-radius: 2px;
	margin-bottom: 10px;
}
.user-list-item h3{
	color: #fff;
}	
@media screen and (max-width: 992px) {
	.users-list {
		grid-template-columns: repeat(1 , 1fr);
	}

	section {
		width: 80%;
	}
}
</style>