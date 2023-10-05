import { defineStore } from "pinia";

export const useLikesStore = defineStore('likes', {
	state: () => ({
		likes: 0,
		dislikes: 0,
	}),

	actions: {
		increaseLikes() {
			this.likes += 1;
		},
		increaseDislikes() {
			this.dislikes += 1;
		}
	}
})