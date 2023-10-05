import { createApp } from 'vue'
import { createPinia } from 'pinia';

import { createRouter, createWebHistory } from "vue-router";
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue';
import Detalles from './views/Detalles.vue';

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/detalles/:id",
		name: "Detalles",
		component: Detalles,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(createPinia()).use(router).mount('#app')
